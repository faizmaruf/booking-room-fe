import { BASE_URL } from "../../helpers/config";
import authorizedAxios from "../../helpers/authorizedAxios";
import { showToast } from "../../utils/helpers/ShowToast";
export const SET_INVITATION_PACKAGES = "SET_INVITATION_PACKAGES";
export const SET_INVITATION_PACKAGE = "SET_INVITATION_PACKAGE";
export const SET_INVITATION_PACKAGES_LOADING =
  "SET_INVITATION_PACKAGES_LOADING";
export const SET_INVITATION_PACKAGES_ERROR = "SET_INVITATION_PACKAGES_ERROR";

export const fetchInvitationPackages = (limit = 100, page = 1) => {
  return async (dispatch) => {
    dispatch({ type: SET_INVITATION_PACKAGES_LOADING, status: true });

    try {
      const response = await authorizedAxios.get(
        "/packages?limit=" + limit + "&page=" + page
      );

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_INVITATION_PACKAGES,
          data: response?.data?.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_INVITATION_PACKAGES_ERROR,
        error:
          error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_INVITATION_PACKAGES_LOADING, status: false });
    }
  };
};

export const getInvitationPackageById = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_INVITATION_PACKAGES_LOADING, status: true });

    try {
      const response = await authorizedAxios.get("/packages/" + id);

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_INVITATION_PACKAGE,
          data: response.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_INVITATION_PACKAGES_ERROR,
        error:
          error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_INVITATION_PACKAGES_LOADING, status: false });
    }
  };
};

export const addInvitationPackage = (data) => {
  return async (dispatch) => {
    dispatch({ type: SET_INVITATION_PACKAGES_LOADING, status: true });

    try {
      const response = await showToast(
        authorizedAxios.post(`${BASE_URL}/packages`, data),
        {
          loading: "Menyimpan data...",
          success: "Data paket undangan berhasil ditambahkan!",
          error: (err) => err?.message || "Gagal menyimpan data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchInvitationPackages());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_INVITATION_PACKAGES_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_INVITATION_PACKAGES_LOADING, status: false });
    }
  };
};

export const updateInvitationPackage = (id, data) => {
  return async (dispatch) => {
    dispatch({ type: SET_INVITATION_PACKAGES_LOADING, status: true });

    try {
      const response = await showToast(
        authorizedAxios.put(`${BASE_URL}/packages/${id}`, data),
        {
          loading: "Mengupdate data...",
          success: "Data paket undangan berhasil diupdate!",
          error: (err) => err?.message || "Gagal mengupdate data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchInvitationPackages());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_INVITATION_PACKAGES_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_INVITATION_PACKAGES_LOADING, status: false });
    }
  };
};

export const deleteInvitationPackage = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_INVITATION_PACKAGES_LOADING, status: true });

    try {
      const response = await showToast(
        authorizedAxios.delete(`${BASE_URL}/packages/${id}`),
        {
          loading: "Menghapus data...",
          success: "Data paket undangan berhasil dihapus!",
          error: (err) => err?.message || "Gagal menghapus data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchInvitationPackages());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_INVITATION_PACKAGES_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_INVITATION_PACKAGES_LOADING, status: false });
    }
  };
};
