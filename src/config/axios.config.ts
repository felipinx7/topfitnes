import axios from "axios";

export const BASEURL = "https://api.topfitnes.com.br"

export const api = axios.create({
  baseURL: "https://api.topfitnes.com.br",
  withCredentials: true,
});
