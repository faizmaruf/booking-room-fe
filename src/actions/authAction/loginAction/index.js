import axios from "axios";
import { BASE_URL } from "../../../helpers/config.js";
import authorizedAxios from "../../../helpers/authorizedAxios";
import { showToast } from "../../../utils/helpers/ShowToast";
export const SET_LOGIN = "SET_LOGIN";
export const SET_LOGIN_LOADING = "SET_LOGIN_LOADING";
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";

export const fetchUserProfile = () => {
  return async (dispatch) => {
    try {
      const response = await authorizedAxios.get("/me");

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("userProfile", JSON.stringify(response?.data?.data));
      }
    } catch (error) {
      localStorage.removeItem("userProfile");
      dispatch({ type: "FETCH_USER_PROFILE_FAILED", error: error.message });
    }
  };
};

export const login = (data) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOGIN_LOADING, status: true });
    try {
      const response = await showToast(axios.post(`${BASE_URL}/login`, data), {
        loading: "Login...",
        success: "Berhasil Login",
        error: (err) => err?.response?.message || "Gagal Login!",
      });

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("auth", JSON.stringify(response?.data?.data));
        await dispatch(fetchUserProfile());

        window.location.href = "/home";
      }
    } catch (error) {
      console.error("error", error);
      localStorage.removeItem("auth");
      dispatch({
        type: SET_LOGIN_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_LOGIN_LOADING, status: false });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("userProfile");
    window.location.href = "/login";
  };
};
