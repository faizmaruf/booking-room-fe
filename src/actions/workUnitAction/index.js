import { BASE_URL } from "../../helpers/config";
import authorizedAxios from "../../helpers/authorizedAxios";
import { showToast } from "../../utils/helpers/ShowToast";
export const SET_WORK_UNITS = "SET_WORK_UNITS";
export const SET_WORK_UNIT = "SET_WORK_UNIT";
export const SET_WORK_UNITS_LOADING = "SET_WORK_UNITS_LOADING";
export const SET_WORK_UNITS_ERROR = "SET_WORK_UNITS_ERROR";

export const fetchWorkUnits = (limit = 100, page = 1) => {
  return async (dispatch) => {
    dispatch({ type: SET_WORK_UNITS_LOADING, status: true });

    try {
      const response = await authorizedAxios.get("/work-units?limit=" + limit + "&page=" + page);

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_WORK_UNITS,
          data: response?.data?.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_WORK_UNITS_ERROR,
        error: error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_WORK_UNITS_LOADING, status: false });
    }
  };
};

export const getWorkUnitById = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_WORK_UNITS_LOADING, status: true });

    try {
      const response = await authorizedAxios.get("/work-units/" + id);

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_WORK_UNIT,
          data: response.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_WORK_UNITS_ERROR,
        error: error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_WORK_UNITS_LOADING, status: false });
    }
  };
};

export const addWorkUnit = (data) => {
  return async (dispatch) => {
    dispatch({ type: SET_WORK_UNITS_LOADING, status: true });

    try {
      const response = await showToast(authorizedAxios.post(`${BASE_URL}/work-units`, data), {
        loading: "Menyimpan data...",
        success: "Data work_unit berhasil ditambahkan!",
        error: (err) => err?.message || "Gagal menyimpan data!",
      });
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchWorkUnits());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_WORK_UNITS_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_WORK_UNITS_LOADING, status: false });
    }
  };
};

export const updateWorkUnit = (id, data) => {
  return async (dispatch) => {
    dispatch({ type: SET_WORK_UNITS_LOADING, status: true });

    try {
      const response = await showToast(authorizedAxios.put(`${BASE_URL}/work-units/${id}`, data), {
        loading: "Mengupdate data...",
        success: "Data work_unit berhasil diupdate!",
        error: (err) => err?.message || "Gagal mengupdate data!",
      });
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchWorkUnits());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_WORK_UNITS_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_WORK_UNITS_LOADING, status: false });
    }
  };
};

export const deleteWorkUnit = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_WORK_UNITS_LOADING, status: true });

    try {
      const response = await showToast(authorizedAxios.delete(`${BASE_URL}/work-units/${id}`), {
        loading: "Menghapus data...",
        success: "Data work_unit berhasil dihapus!",
        error: (err) => err?.message || "Gagal menghapus data!",
      });
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchWorkUnits());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_WORK_UNITS_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_WORK_UNITS_LOADING, status: false });
    }
  };
};
