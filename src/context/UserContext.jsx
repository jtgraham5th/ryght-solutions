import { useContext, createContext, useEffect, useState } from "react";
import React from "react";
// import { parseSignUpData } from "../features/authentication/utils/parseData";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState("");
  const isAuthenticated = () => {
    const token = localStorage.getItem("UserID");
    if (!token) return false;
    return true;
  };

  const login = async (data) => {
    const { username, password } = data;
    try {
      const response = await fetch(
        `http://ivronlogs.icu:8080/rsv1/generic_api/list/19?fields=*&where=username=${username}&orderby=fullname`
      );
      if (response.ok) {
        const res = await response.json();
        if (res.length > 0) {
          setUser(res[0]);
          localStorage.setItem("UserID", res[0].UseriD);
          return true;
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
      const response = await fetch(
        `http://www.ivronlogs.icu:8080/rsv1/generic_api/19?fields=UseriD,FirstName,LastName,Email,Password,Title`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(signupData),
        }
      );

      if (response.ok) {
        const res = await response.json();
        console.log(res);
        if (res.length > 0) {
          setUser(res[0]);
          localStorage.setItem("UserID", res[0].UseriD);
          return res[0];
        }
      }
    } catch (err) {
      console.error(err);
    }
    return false;
  };
  const updateUser = async (data, fields) => {
    // const signupData = parseSignUpData(data);
    console.log(data);
    const requestBody = [{ ...data }];
    delete requestBody[0].UseriD;
    console.log(requestBody);
    try {
      const response = await fetch(
        `http://www.ivronlogs.icu:8080/rsv1/generic_api/${user.UseriD}?tid=19&fields=${fields}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      console.log(response);
      if (response.ok) {
        const res = await response.json();
        console.log(res);
        if (res.length > 0) {
          getUser(user.UseriD);
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
        `http://www.ivronlogs.icu:8080/rsv1/generic_api/${userID}?tid=19&fields=*`
      );
      if (response.ok) {
        const res = await response.json();
        console.log("!!", res);
        if (res.length > 0) {
          setUser(res[0]);
          localStorage.setItem("UserID", res[0].UserID);
        }
      } else {
        logout();
      }
    } catch (err) {
      console.error(err);
      logout();
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
        isAuthenticated,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
