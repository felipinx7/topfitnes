import axios from "axios";

export const api = axios.create({
  baseURL: "localhost:4444/",
  withCredentials: true,
});
