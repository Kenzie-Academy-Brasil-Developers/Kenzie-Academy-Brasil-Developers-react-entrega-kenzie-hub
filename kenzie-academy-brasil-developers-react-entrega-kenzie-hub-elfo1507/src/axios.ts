import axios from "axios";

interface iApi{
  
}

export const instanceNoAuth = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 10000,
  headers: { ContentType: "application/json" },
});

export const instanceAuth = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("@token")}`,
    ContentType: "application/json",
  },
});
