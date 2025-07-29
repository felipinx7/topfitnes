import axios from "axios";

export const BASEURL = "http://localhost:4000"

export const api = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});
