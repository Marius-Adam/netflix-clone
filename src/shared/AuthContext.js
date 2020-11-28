import { createContext, useState } from "react";
import React from "react";
import axios from "axios";

const initialState = {};

export const AuthContext = createContext(initialState);


export const AuthProvider = (props) => {
  const [sessionId, setSessionId] = useState();
  const [accessToken, setAccessToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState();
  const TMDB_KEY = "6bec9ad5a46f7fe6699df4bba6a319fc";
  const TOKEN_URL =
    "https://api.themoviedb.org/3/authentication/token/new?api_key=";
  const AUTHENTICATE_URL = "https://www.themoviedb.org/authenticate/";
  const VALIDATE_TOKEN_URL =
    "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=";
  const CREATE_SESSION = "https://api.themoviedb.org/3/authentication/session/new?api_key="
  
  
  function getAccessToken() {
    return axios.get(`${TOKEN_URL}${TMDB_KEY}`).then((token) => token.data);
  }
  
  function redirectSignIn(token) {
    window.location.href = `${AUTHENTICATE_URL}${token}?redirect_to=http://localhost:3000/login`;
  }
  //https://nervous-khorana-7457e2.netlify.app/login
  
  function validateToken(username, password, request_token) {
    return axios
      .post(`${VALIDATE_TOKEN_URL}${TMDB_KEY}`, {
        username,
        password,
        request_token,
      })
      .then((response) => {
        console.log(response);
      });
  }
  
  function createSessionId(request_token) {
    return axios
    .post(`${CREATE_SESSION}${TMDB_KEY}`, {
      request_token,
    })
    .then((response) => {
      console.log(response.data.session_id)
      setSessionId(response.data.session_id)
    });
  }

  return (
    <AuthContext.Provider
      value={{
        sessionId,
        setSessionId,
        accessToken,
        setAccessToken,
        isAuthenticated,
        setIsAuthenticated,
        validateToken,
        createSessionId,
        redirectSignIn,
        getAccessToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

