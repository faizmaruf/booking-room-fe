import axios from "axios";
import { showToast } from "../../../utils/helpers/ShowToast";
export const SET_VILLAGES = "SET_VILLAGES";
export const SET_VILLAGES_LOADING = "SET_VILLAGES_LOADING";
export const SET_VILLAGES_ERROR = "SET_VILLAGES_ERROR";

export const fetchVillages = () => {
  return async (dispatch) => {
    dispatch({ type: SET_VILLAGES_LOADING, status: true });

    try {
      const response = await axios.get(
        "https://www.emsifa.com/api-wilayah-indonesia/api/villages.json"
      );

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_VILLAGES,
          data: response.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_VILLAGES_ERROR,
        error:
          error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_VILLAGES_LOADING, status: false });
    }
  };
};

export const addVillage = (data) => {
  return async (dispatch) => {
    dispatch({ type: SET_VILLAGES_LOADING, status: true });

    try {
      const response = await showToast(
        axios.post(
          "https://www.emsifa.com/api-wilayah-indonesia/api/villages.json",
          data
        ),
        {
          loading: "Menyimpan data...",
          success: "Data kelurahan berhasil ditambahkan!",
          error: (err) => err?.message || "Gagal menyimpan data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
        fetchVillages();
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_VILLAGES_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_VILLAGES_LOADING, status: false });
    }
  };
};

export const deleteVillage = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_VILLAGES_LOADING, status: true });
    axios
      .delete(
        "https://www.emsifa.com/api-wilayah-indonesia/api/villages/" +
          id +
          ".json"
      )
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_VILLAGES,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        dispatch({
          type: SET_VILLAGES_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_VILLAGES_LOADING, status: false });
      });
  };
};

export const updateVillage = (id, data) => {
  return (dispatch) => {
    dispatch({ type: SET_VILLAGES_LOADING, status: true });
    axios
      .put(
        "https://www.emsifa.com/api-wilayah-indonesia/api/villages/" +
          id +
          ".json",
        data
      )
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_VILLAGES,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        dispatch({
          type: SET_VILLAGES_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_VILLAGES_LOADING, status: false });
      });
  };
};
