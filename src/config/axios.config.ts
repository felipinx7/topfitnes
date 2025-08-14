import axios from "axios";

export const BASEURL = "https://api.topfitnes.com.br/api"

export const api = axios.create({
  baseURL: "https://api.topfitnes.com.br/api",
  withCredentials: true,
});
