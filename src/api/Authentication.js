import axios from "axios";

const TMDB_KEY = "6bec9ad5a46f7fe6699df4bba6a319fc";
const TOKEN_URL =
  "https://api.themoviedb.org/3/authentication/token/new?api_key=";
const AUTHENTICATE_URL = "https://www.themoviedb.org/authenticate/";
const VALIDATE_TOKEN_URL =
  "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=";

export function getAccessToken() {
  return axios.get(`${TOKEN_URL}${TMDB_KEY}`).then((token) => token.data);
}

export function redirectSignIn(token) {
  window.location.href = `${AUTHENTICATE_URL}${token}?redirect_to=http://localhost:3000/login`;
}
//https://nervous-khorana-7457e2.netlify.app/login

export function validateToken(username, password, request_token) {
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
