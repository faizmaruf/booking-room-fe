import { BASE_URL } from "../../helpers/config";
import authorizedAxios from "../../helpers/authorizedAxios";
import { showToast } from "../../utils/helpers/ShowToast";
export const SET_INVITATION_SERVICES = "SET_INVITATION_SERVICES";
export const SET_INVITATION_SERVICE = "SET_INVITATION_SERVICE";
export const SET_INVITATION_SERVICES_LOADING =
  "SET_INVITATION_SERVICES_LOADING";
export const SET_INVITATION_SERVICES_ERROR = "SET_INVITATION_SERVICES_ERROR";

export const fetchInvitationServices = (limit = 100, page = 1) => {
  return async (dispatch) => {
    dispatch({ type: SET_INVITATION_SERVICES_LOADING, status: true });

    try {
      const response = await authorizedAxios.get(
        "/services?limit=" + limit + "&page=" + page
      );

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_INVITATION_SERVICES,
          data: response?.data?.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_INVITATION_SERVICES_ERROR,
        error:
          error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_INVITATION_SERVICES_LOADING, status: false });
    }
  };
};

export const getInvitationServiceById = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_INVITATION_SERVICES_LOADING, status: true });

    try {
      const response = await authorizedAxios.get("/services/" + id);

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_INVITATION_SERVICE,
          data: response.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_INVITATION_SERVICES_ERROR,
        error:
          error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_INVITATION_SERVICES_LOADING, status: false });
    }
  };
};

export const addInvitationService = (data) => {
  return async (dispatch) => {
    dispatch({ type: SET_INVITATION_SERVICES_LOADING, status: true });

    try {
      const response = await showToast(
        authorizedAxios.post(`${BASE_URL}/services`, data),
        {
          loading: "Menyimpan data...",
          success: "Data layanan undangan berhasil ditambahkan!",
          error: (err) => err?.message || "Gagal menyimpan data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchInvitationServices());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_INVITATION_SERVICES_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_INVITATION_SERVICES_LOADING, status: false });
    }
  };
};

export const updateInvitationService = (id, data) => {
  return async (dispatch) => {
    dispatch({ type: SET_INVITATION_SERVICES_LOADING, status: true });

    try {
      const response = await showToast(
        authorizedAxios.put(`${BASE_URL}/services/${id}`, data),
        {
          loading: "Mengupdate data...",
          success: "Data layanan undangan berhasil diupdate!",
          error: (err) => err?.message || "Gagal mengupdate data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchInvitationServices());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_INVITATION_SERVICES_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_INVITATION_SERVICES_LOADING, status: false });
    }
  };
};

export const deleteInvitationService = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_INVITATION_SERVICES_LOADING, status: true });

    try {
      const response = await showToast(
        authorizedAxios.delete(`${BASE_URL}/services/${id}`),
        {
          loading: "Menghapus data...",
          success: "Data layanan undangan berhasil dihapus!",
          error: (err) => err?.message || "Gagal menghapus data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchInvitationServices());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_INVITATION_SERVICES_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_INVITATION_SERVICES_LOADING, status: false });
    }
  };
};
