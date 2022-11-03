import axios from "axios";

export const instanceNoAuth = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 10000,
});

export const instanceAuth = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 10000,
});

export const headersAuth = {
  headers: {
    "Content-Type": "application/json",
    Authentication: `Bearer ${localStorage.getItem("@token")}`,
  },
};
