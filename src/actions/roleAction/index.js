import { BASE_URL } from "../../helpers/config";
import authorizedAxios from "../../helpers/authorizedAxios";
import { showToast } from "../../utils/helpers/ShowToast";
export const SET_ROLES = "SET_ROLES";
export const SET_ROLE = "SET_ROLE";
export const SET_ROLES_LOADING = "SET_ROLES_LOADING";
export const SET_ROLES_ERROR = "SET_ROLES_ERROR";

export const fetchRoles = (limit = 100, page = 1) => {
  return async (dispatch) => {
    dispatch({ type: SET_ROLES_LOADING, status: true });

    try {
      const response = await authorizedAxios.get(
        "/roles?limit=" + limit + "&page=" + page
      );

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_ROLES,
          data: response?.data?.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_ROLES_ERROR,
        error:
          error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_ROLES_LOADING, status: false });
    }
  };
};

export const getRoleById = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_ROLES_LOADING, status: true });

    try {
      const response = await authorizedAxios.get("/roles/" + id);

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_ROLE,
          data: response.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_ROLES_ERROR,
        error:
          error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_ROLES_LOADING, status: false });
    }
  };
};

export const addRole = (data) => {
  return async (dispatch) => {
    dispatch({ type: SET_ROLES_LOADING, status: true });

    try {
      const response = await showToast(
        authorizedAxios.post(`${BASE_URL}/roles`, data),
        {
          loading: "Menyimpan data...",
          success: "Data role berhasil ditambahkan!",
          error: (err) => err?.message || "Gagal menyimpan data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchRoles());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_ROLES_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_ROLES_LOADING, status: false });
    }
  };
};

export const updateRole = (id, data) => {
  return async (dispatch) => {
    dispatch({ type: SET_ROLES_LOADING, status: true });

    try {
      const response = await showToast(
        authorizedAxios.put(`${BASE_URL}/roles/${id}`, data),
        {
          loading: "Mengupdate data...",
          success: "Data role berhasil diupdate!",
          error: (err) => err?.message || "Gagal mengupdate data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchRoles());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_ROLES_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_ROLES_LOADING, status: false });
    }
  };
};

export const deleteRole = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_ROLES_LOADING, status: true });

    try {
      const response = await showToast(
        authorizedAxios.delete(`${BASE_URL}/roles/${id}`),
        {
          loading: "Menghapus data...",
          success: "Data role berhasil dihapus!",
          error: (err) => err?.message || "Gagal menghapus data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchRoles());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_ROLES_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_ROLES_LOADING, status: false });
    }
  };
};
