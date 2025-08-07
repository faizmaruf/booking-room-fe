import axios from "axios";
import { showToast } from "../../../utils/helpers/ShowToast";
export const SET_PROVINCES = "SET_PROVINCES";
export const SET_PROVINCES_LOADING = "SET_PROVINCES_LOADING";
export const SET_PROVINCES_ERROR = "SET_PROVINCES_ERROR";

export const fetchProvinces = () => {
  return async (dispatch) => {
    dispatch({ type: SET_PROVINCES_LOADING, status: true });

    try {
      const response = await axios.get(
        "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
      );

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_PROVINCES,
          data: response.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_PROVINCES_ERROR,
        error:
          error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_PROVINCES_LOADING, status: false });
    }
  };
};

export const addProvince = (data) => {
  return async (dispatch) => {
    dispatch({ type: SET_PROVINCES_LOADING, status: true });

    try {
      const response = await showToast(
        axios.post(
          "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json",
          data
        ),
        {
          loading: "Menyimpan data...",
          success: "Data provinsi berhasil ditambahkan!",
          error: (err) => err?.message || "Gagal menyimpan data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
        fetchProvinces();
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_PROVINCES_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_PROVINCES_LOADING, status: false });
    }
  };
};

export const updateProvince = (id, data) => {
  return (dispatch) => {
    dispatch({ type: SET_PROVINCES_LOADING, status: true });
    axios
      .put(
        "https://www.emsifa.com/api-wilayah-indonesia/api/provinces/" +
          id +
          ".json",
        data
      )
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_PROVINCES,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        dispatch({
          type: SET_PROVINCES_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_PROVINCES_LOADING, status: false });
      });
  };
};

export const deleteProvince = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_PROVINCES_LOADING, status: true });
    axios
      .delete(
        "https://www.emsifa.com/api-wilayah-indonesia/api/provinces/" +
          id +
          ".json"
      )
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_PROVINCES,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        dispatch({
          type: SET_PROVINCES_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_PROVINCES_LOADING, status: false });
      });
  };
};
