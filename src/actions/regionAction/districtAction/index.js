import axios from "axios";
import { showToast } from "../../../utils/helpers/ShowToast";
export const SET_DISTRICTS = "SET_DISTRICTS";
export const SET_DISTRICTS_LOADING = "SET_DISTRICTS_LOADING";
export const SET_DISTRICTS_ERROR = "SET_DISTRICTS_ERROR";

export const fetchDistricts = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_DISTRICTS_LOADING, status: true });

    try {
      const response = await axios.get(
        "https://www.emsifa.com/api-wilayah-indonesia/api/districts/" +
          id +
          ".json"
      );

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_DISTRICTS,
          data: response.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_DISTRICTS_ERROR,
        error:
          error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_DISTRICTS_LOADING, status: false });
    }
  };
};

export const addDistrict = (data) => {
  return async (dispatch) => {
    dispatch({ type: SET_DISTRICTS_LOADING, status: true });

    try {
      const response = await showToast(
        axios.post(
          "https://www.emsifa.com/api-wilayah-indonesia/api/districts.json",
          data
        ),
        {
          loading: "Menyimpan data...",
          success: "Data kecamatan berhasil ditambahkan!",
          error: (err) => err?.message || "Gagal menyimpan data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
        fetchDistricts();
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_DISTRICTS_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_DISTRICTS_LOADING, status: false });
    }
  };
};

export const deleteDistrict = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_DISTRICTS_LOADING, status: true });
    axios
      .delete(
        "https://www.emsifa.com/api-wilayah-indonesia/api/districts/" +
          id +
          ".json"
      )
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_DISTRICTS,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        dispatch({
          type: SET_DISTRICTS_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_DISTRICTS_LOADING, status: false });
      });
  };
};

export const updateDistrict = (id, data) => {
  return (dispatch) => {
    dispatch({ type: SET_DISTRICTS_LOADING, status: true });
    axios
      .put(
        "https://www.emsifa.com/api-wilayah-indonesia/api/districts/" +
          id +
          ".json",
        data
      )
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_DISTRICTS,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        dispatch({
          type: SET_DISTRICTS_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_DISTRICTS_LOADING, status: false });
      });
  };
};
