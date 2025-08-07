import axios from "axios";
import { showToast } from "../../../utils/helpers/ShowToast";
export const SET_CITIES = "SET_CITIES";
export const SET_CITIES_LOADING = "SET_CITIES_LOADING";
export const SET_CITIES_ERROR = "SET_CITIES_ERROR";

export const fetchCities = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_CITIES_LOADING, status: true });

    try {
      const response = await axios.get(
        `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`
      );

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_CITIES,
          data: response.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_CITIES_ERROR,
        error:
          error?.response?.data ||
          "Terjadi kesalahan saat mengambil data kota.",
      });
    } finally {
      dispatch({ type: SET_CITIES_LOADING, status: false });
    }
  };
};

export const addCity = (data) => {
  return async (dispatch) => {
    dispatch({ type: SET_CITIES_LOADING, status: true });

    try {
      const response = await showToast(
        axios.post(
          "https://www.emsifa.com/api-wilayah-indonesia/api/regencies.json",
          data
        ),
        {
          loading: "Menyimpan data...",
          success: "Data kota berhasil ditambahkan!",
          error: (err) => err?.message || "Gagal menyimpan data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
        fetchCities(data.province_id);
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_CITIES_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_CITIES_LOADING, status: false });
    }
  };
};

export const updateCity = (id, data) => {
  return (dispatch) => {
    dispatch({ type: SET_CITIES_LOADING, status: true });
    axios
      .put(
        "https://www.emsifa.com/api-wilayah-indonesia/api/regencies/" +
          id +
          ".json",
        data
      )
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_CITIES,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        dispatch({
          type: SET_CITIES_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_CITIES_LOADING, status: false });
      });
  };
};

export const deleteCity = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_CITIES_LOADING, status: true });
    axios
      .delete(
        "https://www.emsifa.com/api-wilayah-indonesia/api/regencies/" +
          id +
          ".json"
      )
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_CITIES,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        dispatch({
          type: SET_CITIES_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_CITIES_LOADING, status: false });
      });
  };
};
