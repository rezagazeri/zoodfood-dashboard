import React, { useReducer } from "react";
import axios from "axios";

import authReducer from "./authReducer";
import AuthContext from "./authContext";
import { userActionTypes } from "./../Types";

const AuthState = (props) => {
  //initial state for login user
  const Initial_State = {
    user: null,
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    error: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(authReducer, Initial_State);
  const login = (userData) => {
    const headerConfig = {
      headers: {
        "content-type": "application/json",
      },
    };
    const res = {
      data: {
        token: "123456789",
      },
    };
    //try {
    //   const res = await axios.post(
    //     "http://localhost:4000/api/v1/login",
    //     userData,
    //     headerConfig
    //   );
    dispatch({ type: userActionTypes.LOGIN_SUCCESS, payload: res.data.token });
    //} catch (err) {
    // dispatch({ type: userActionTypes.LOGIN_FAIL, payload: err.response.data.msg });
    //}
  };

  const clearError = () => {};
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        loading: state.loading,
        login,
        clearError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
