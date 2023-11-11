import { useContext, createContext, useEffect, useState } from "react";
import React from "react";
import {
  addNewUser,
  getUserWithID,
  getUserWithField,
  updateUser,
} from "../features/authentication/services/api";

const UserContext = createContext();
const apiUrl = process.env.REACT_APP_API_URL;

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState("");
  const [allUsers, setAllUser] = useState("");

  const isAuthenticated = () => {
    const token = localStorage.getItem("UserID");
    if (!token) return false;
    return true;
  };

  const login = async (data) => {
    const { email, password } = data;
    try {
      const response = await fetch(`${apiUrl}generic_api/pcheck/760?tid=19`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const res = await response.json();
        if (res.length > 0) {
          if (res[0].message !== "password was not validated...") {
            return await getUserWithField("username", data[0].UserName).then(
              (userData) => {
                if (userData.length > 0) {
                  setUser(userData[0]);
                  localStorage.setItem("UserID", userData[0].userid);
                  return true;
                }
              }
            );
          } else {
            logout();
            return false;
          }
        }
      }
    } catch (err) {
      console.error(err);
      logout();
    }
  };

  const signup = async (data) => {
    // const signupData = parseSignUpData(data);
    try {
      return await addNewUser().then((data) => {
        if (data) {
          setUser(data);
          localStorage.setItem("UserID", data.userid);
          return data;
        }
      });
    } catch (err) {
      console.error(err);
    }
    return false;
  };
  const updateCurrentUser = async (data, fields) => {
    const requestBody = [{ ...data }];
    delete requestBody[0].UseriD;
    try {
      await updateUser(data.userid, requestBody, fields).then((data) => {
        if (data.length > 0) {
          getUser(user.userid);
          return true;
        }
      });
    } catch (err) {
      console.error(err);
    }
    return false;
  };
  const adminUpdateUser = async (userid, updatedUser, fields) => {
    // const signupData = parseSignUpData(data);
    try {
      return await updateUser(userid, updatedUser, fields).then((data) => {
        if (data.length > 0) {
          getAllUsers();
          return true;
        }
      });
    } catch (err) {
      console.error(err);
    }
    return false;
  };
  const logout = () => {
    localStorage.removeItem("UserID");
  };
  const getUser = async (userID) => {
    try {
      await getUserWithID(userID).then((data) => {
        if (data.length > 0) {
          setUser(data[0]);
          localStorage.setItem("UserID", data[0].userid);
        } else {
          logout();
        }
      });
    } catch (err) {
      console.error(err);
      logout();
    }
  };
  const getAllUsers = async () => {
    try {
      const response = await fetch(
        `${apiUrl}generic_api/list/19?fields=email,userid,firstname,lastname,username,fullname,accesslevel&where=active=1&orderby=fullname`
      );
      if (response.ok) {
        const res = await response.json();
        if (res.length > 0) {
          console.log(res);
          setAllUser(res);
          return res;
        }
        return false;
      }
    } catch (err) {
      console.error(err);
    }
  };
  const pinCheck = async (data) => {
    const { email, password } = data;
    try {
      const response = await fetch(`${apiUrl}generic_api/pcheck/760?tid=19`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const res = await response.json();
        console.log(res);
        return true;
      } else return false;
    } catch (err) {
      console.error(err);
    }
    return false;
  };
  const updatePassword = async (data) => {
    try {
      const response = await fetch(
        `${apiUrl}generic_api/pcheck/${data[0].userid}?tid=19`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        const res = await response.json();
        console.log(res);
        return true;
      } else return false;
    } catch (err) {
      console.error(err);
    }
    return false;
  };
  
  useEffect(() => {
    if (isAuthenticated() && !user) {
      const token = localStorage.getItem("UserID");
      getUser(token);
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        signup,
        logout,
        login,
        updatePassword,
        updateCurrentUser,
        adminUpdateUser,
        isAuthenticated,
        getAllUsers,
        allUsers,
        pinCheck,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
