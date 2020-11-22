import axios from "axios";

const TMDB_API = process.env.REACT_APP_TMDB_API_KEY;
const TOKEN_URL = process.env.REACT_APP_TMDB_NEW_TOKEN_URL;
const AUTHENTICATE_URL = process.env.REACT_APP_TMDB_AUTHENTICATE_URL;
const VALIDATE_TOKEN_URL = process.env.REACT_APP_TMDB_VALIDATE_TOKEN;

export function getAccessToken() {
  return axios.get(`${TOKEN_URL}${TMDB_API}`).then((token) => token.data);
}

export function redirectSignIn(token) {
  window.location.href = `${AUTHENTICATE_URL}${token}?redirect_to=http://localhost:3000/login`;
}

export function validateToken(username, password, request_token) {
  return axios
    .post(`${VALIDATE_TOKEN_URL}${TMDB_API}`, {
      username,
      password,
      request_token,
    })
    .then((response) => {
      console.log(response);
    });
}
