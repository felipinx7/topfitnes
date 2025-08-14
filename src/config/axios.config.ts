import axios from "axios";

export const BASEURL = "http://72.60.8.246:4000"

export const api = axios.create({
  baseURL: "http://72.60.8.246:4000",
  withCredentials: true,
});
