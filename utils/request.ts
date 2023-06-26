const axios = require("axios");
import Router from "next/router";
// import TokenService from '../services/token.service'
// import jwt from 'jsonwebtoken'
// import { getCookie } from 'cookies-next';

export const url = process.env.BASE_URL || "https://apidev.themartec.com/v1";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const request = axios.create({
  baseURL: `${url}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

request.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    const res = error.response;
    switch (res && res.status) {
      case 401:
        localStorage.clear();
        Router.push("/login");
        // window.location.reload();
        break;
      case 403:
        //do something
        break;
      case 404:
        //do something
        break;
      //...
      case 500:
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default request;
