import axios from "axios";
import { BASE_URL } from "./config";

const authorizedAxios = axios.create({
  baseURL: BASE_URL,
});

authorizedAxios.interceptors.request.use(
  (config) => {
    try {
      const stored = localStorage.getItem("auth");
      const token = stored ? JSON.parse(stored)?.access_token : null;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (e) {
      console.warn("Gagal parsing token dari localStorage:", e);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default authorizedAxios;
