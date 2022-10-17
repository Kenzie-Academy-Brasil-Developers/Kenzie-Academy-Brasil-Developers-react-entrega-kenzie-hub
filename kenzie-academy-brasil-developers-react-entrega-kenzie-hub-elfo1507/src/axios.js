import axios from "axios";

export const instanceNoAuth = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 10000,
  headers: { contentType: "application/json" },
});

export const instanceAuth = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("@token")}`,
    contentType: "application/json",
  },
});
