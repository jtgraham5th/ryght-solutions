import { useContext, createContext, useEffect, useState } from "react";
import React from "react";
import {
  addNewUser,
  getUserWithID,
  getUserWithField,
  updateUser,
} from "../features/authentication/services/api";
import { mockData } from "../mock/mockData";

const UserContext = createContext();
const apiUrl = process.env.REACT_APP_API_URL;
const useMockApi =
  process.env.REACT_APP_USE_MOCK === "true" || !apiUrl || apiUrl.length === 0;
const MOCK_PASSWORD = process.env.REACT_APP_MOCK_PASSWORD || "demo";

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
    try {
      if (useMockApi) {
        const identifier = (data[0]?.UserName || "").toLowerCase();
        const submittedPassword = data[0]?.StringValue || "";

        const matchedUser = mockData.users.find((mockUser) => {
          return (
            mockUser.username.toLowerCase() === identifier ||
            mockUser.email.toLowerCase() === identifier
          );
        });

        if (matchedUser && submittedPassword === MOCK_PASSWORD) {
          setUser(matchedUser);
          localStorage.setItem("UserID", matchedUser.userid);
          return true;
        }

        logout();
        return false;
      }

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
    try {
      if (useMockApi) {
        const newUserId = mockData.users.length + 1;
        const newUser = {
          userid: newUserId,
          firstname: data.firstname || "Demo",
          lastname: data.lastname || "User",
          email: data.email || `demo${newUserId}@ryghtsolutions.com`,
          username: data.username || `demo${newUserId}`,
          fullname: `${data.firstname || "Demo"} ${data.lastname || "User"}`,
          accesslevel: "therapist",
          active: 1,
        };
        mockData.users.push(newUser);
        setUser(newUser);
        localStorage.setItem("UserID", newUser.userid);
        return newUser;
      }

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
      if (useMockApi) {
        const userIndex = mockData.users.findIndex(
          (mockUser) => mockUser.userid === data.userid
        );
        if (userIndex !== -1) {
          mockData.users[userIndex] = {
            ...mockData.users[userIndex],
            ...data,
          };
          setUser(mockData.users[userIndex]);
          return true;
        }
        return false;
      }

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
    try {
      if (useMockApi) {
        const userIndex = mockData.users.findIndex(
          (mockUser) => mockUser.userid === userid
        );
        if (userIndex !== -1) {
          mockData.users[userIndex] = {
            ...mockData.users[userIndex],
            ...updatedUser[0],
          };
          setAllUser([...mockData.users]);
          return true;
        }
        return false;
      }

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
      if (useMockApi) {
        const matchedUser = mockData.users.find(
          (mockUser) => String(mockUser.userid) === String(userID)
        );
        if (matchedUser) {
          setUser(matchedUser);
          localStorage.setItem("UserID", matchedUser.userid);
        } else {
          logout();
        }
        return;
      }

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
      if (useMockApi) {
        setAllUser(mockData.users);
        return mockData.users;
      }

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
    try {
      if (useMockApi) {
        const identifier = (data[0]?.UserName || "").toLowerCase();
        const submittedPin = data[0]?.PinValue || "";
        const matchedUser = mockData.users.find((mockUser) => {
          return (
            mockUser.username.toLowerCase() === identifier ||
            mockUser.email.toLowerCase() === identifier
          );
        });

        if (matchedUser && submittedPin === "") {
          return true;
        }
        return false;
      }

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
      if (useMockApi) {
        return true;
      }

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
