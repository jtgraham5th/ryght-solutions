import { useContext, createContext, useEffect, useState } from "react";
import React from "react";

// import { parseSignUpData } from "../features/authentication/utils/parseData";

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
            getUserWithField("username", data[0].UserName);
            setUser(res[0]);
            localStorage.setItem("UserID", res[0].UseriD);
            return true;
          } else return false;
        }
      }
    } catch (err) {
      console.error(err);
    }
    return false;
  };

  const signup = async (data) => {
    // const signupData = parseSignUpData(data);
    try {
      const response = await fetch(`${apiUrl}generic_api/19?fields=userid`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(signupData),
      });

      if (response.ok) {
        const res = await response.json();
        if (res.length > 0) {
          setUser(res[0]);
          localStorage.setItem("UserID", res[0].userid);
          return res[0];
        }
      }
    } catch (err) {
      console.error(err);
    }
    return false;
  };
  const updateUser = async (data, fields) => {
    const requestBody = [{ ...data }];
    delete requestBody[0].UseriD;
    try {
      const response = await fetch(
        `${apiUrl}generic_api/${data.userid}?tid=19&fields=${fields}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      if (response.ok) {
        const res = await response.json();
        if (res.length > 0) {
          getUser(user.userid);
          return true;
        }
      }
    } catch (err) {
      console.error(err);
    }
    return false;
  };
  const adminUpdateUser = async (userid, data, fields) => {
    // const signupData = parseSignUpData(data);
    try {
      const response = await fetch(
        `${apiUrl}generic_api/${userid}?tid=19&fields=${fields}`,
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
        if (res.length > 0) {
          getAllUsers();
          return true;
        }
      }
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
      const response = await fetch(
        `${apiUrl}generic_api/${userID}?tid=19&fields=*`
      );
      if (response.ok) {
        const res = await response.json();
        const userData = res.map((obj) =>
          Object.fromEntries(
            Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
          )
        );
        if (userData.length > 0) {
          setUser(userData[0]);
          localStorage.setItem("UserID", userData[0].userid);
        }
      } else {
        logout();
      }
    } catch (err) {
      console.error(err);
      logout();
    }
  };
  const getUserWithField = async (field, value) => {
    try {
      const response = await fetch(
        `${apiUrl}generic_api/list/19?fields=*&where=${field}=${value}&orderby=userid`
      );
      if (response.ok) {
        const res = await response.json();
        const userData = res.map((obj) =>
          Object.fromEntries(
            Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
          )
        );
        if (userData.length > 0) {
          setUser(userData[0]);
          localStorage.setItem("UserID", userData[0].userid);
        }
      } else {
        logout();
      }
    } catch (err) {
      console.error(err);
      logout();
    }
  };
  const getAllUsers = async () => {
    try {
      const response = await fetch(
        `${apiUrl}generic_api/list/19?fields=email,userid,firstname,lastname,accesslevel&where=active=1&orderby=fullname`
      );
      if (response.ok) {
        const res = await response.json();
        if (res.length > 0) {
          setAllUser(res);
          return res;
        }
        return false;
      }
    } catch (err) {
      console.error(err);
    }
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
        updateUser,
        adminUpdateUser,
        isAuthenticated,
        getAllUsers,
        allUsers,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
