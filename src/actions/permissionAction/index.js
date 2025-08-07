import { BASE_URL } from "../../helpers/config";
import authorizedAxios from "../../helpers/authorizedAxios";
import { showToast } from "../../utils/helpers/ShowToast";
export const SET_PERMISSIONS = "SET_PERMISSIONS";
export const SET_PERMISSION = "SET_PERMISSION";
export const SET_PERMISSIONS_LOADING = "SET_PERMISSIONS_LOADING";
export const SET_PERMISSIONS_ERROR = "SET_PERMISSIONS_ERROR";

export const fetchPermissions = (limit = 200, page = 1) => {
  return async (dispatch) => {
    dispatch({ type: SET_PERMISSIONS_LOADING, status: true });

    try {
      const response = await authorizedAxios.get(
        "/permissions?limit=" + limit + "&page=" + page
      );

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_PERMISSIONS,
          data: response?.data?.data?.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_PERMISSIONS_ERROR,
        error:
          error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_PERMISSIONS_LOADING, status: false });
    }
  };
};

export const getPermissionById = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_PERMISSIONS_LOADING, status: true });

    try {
      const response = await authorizedAxios.get("/permissions/" + id);

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_PERMISSION,
          data: response.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_PERMISSIONS_ERROR,
        error:
          error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_PERMISSIONS_LOADING, status: false });
    }
  };
};

export const addPermission = (data) => {
  return async (dispatch) => {
    dispatch({ type: SET_PERMISSIONS_LOADING, status: true });

    try {
      const response = await showToast(
        authorizedAxios.post(`${BASE_URL}/permissions`, data),
        {
          loading: "Menyimpan data...",
          success: "Data permission berhasil ditambahkan!",
          error: (err) => err?.message || "Gagal menyimpan data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchPermissions());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_PERMISSIONS_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_PERMISSIONS_LOADING, status: false });
    }
  };
};

export const updatePermission = (id, data) => {
  return async (dispatch) => {
    dispatch({ type: SET_PERMISSIONS_LOADING, status: true });

    try {
      const response = await showToast(
        authorizedAxios.put(`${BASE_URL}/permissions/${id}`, data),
        {
          loading: "Mengupdate data...",
          success: "Data permission berhasil diupdate!",
          error: (err) => err?.message || "Gagal mengupdate data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchPermissions());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_PERMISSIONS_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_PERMISSIONS_LOADING, status: false });
    }
  };
};

export const deletePermission = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_PERMISSIONS_LOADING, status: true });

    try {
      const response = await showToast(
        authorizedAxios.delete(`${BASE_URL}/permissions/${id}`),
        {
          loading: "Menghapus data...",
          success: "Data permission berhasil dihapus!",
          error: (err) => err?.message || "Gagal menghapus data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchPermissions());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_PERMISSIONS_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_PERMISSIONS_LOADING, status: false });
    }
  };
};
