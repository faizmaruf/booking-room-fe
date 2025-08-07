import { BASE_URL } from "../../helpers/config";
import authorizedAxios from "../../helpers/authorizedAxios";
import { showToast } from "../../utils/helpers/ShowToast";
export const SET_INVITATION_SONGS = "SET_INVITATION_SONGS";
export const SET_INVITATION_SONG = "SET_INVITATION_SONG";
export const SET_INVITATION_SONGS_LOADING = "SET_INVITATION_SONGS_LOADING";
export const SET_INVITATION_SONGS_ERROR = "SET_INVITATION_SONGS_ERROR";

export const fetchInvitationSongs = (limit = 100, page = 1) => {
  return async (dispatch) => {
    dispatch({ type: SET_INVITATION_SONGS_LOADING, status: true });

    try {
      const response = await authorizedAxios.get(
        "/songs?limit=" + limit + "&page=" + page
      );

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_INVITATION_SONGS,
          data: response?.data?.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_INVITATION_SONGS_ERROR,
        error:
          error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_INVITATION_SONGS_LOADING, status: false });
    }
  };
};

export const getInvitationSongById = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_INVITATION_SONGS_LOADING, status: true });

    try {
      const response = await authorizedAxios.get("/songs/" + id);

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_INVITATION_SONG,
          data: response.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_INVITATION_SONGS_ERROR,
        error:
          error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_INVITATION_SONGS_LOADING, status: false });
    }
  };
};

export const addInvitationSong = (data) => {
  return async (dispatch) => {
    dispatch({ type: SET_INVITATION_SONGS_LOADING, status: true });

    try {
      const response = await showToast(
        authorizedAxios.post(`${BASE_URL}/songs`, data),
        {
          loading: "Menyimpan data...",
          success: "Data master lagu berhasil ditambahkan!",
          error: (err) => err?.message || "Gagal menyimpan data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchInvitationSongs());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_INVITATION_SONGS_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_INVITATION_SONGS_LOADING, status: false });
    }
  };
};

export const updateInvitationSong = (id, data) => {
  return async (dispatch) => {
    dispatch({ type: SET_INVITATION_SONGS_LOADING, status: true });

    try {
      const response = await showToast(
        authorizedAxios.put(`${BASE_URL}/songs/${id}`, data),
        {
          loading: "Mengupdate data...",
          success: "Data master lagu berhasil diupdate!",
          error: (err) => err?.message || "Gagal mengupdate data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchInvitationSongs());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_INVITATION_SONGS_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_INVITATION_SONGS_LOADING, status: false });
    }
  };
};

export const deleteInvitationSong = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_INVITATION_SONGS_LOADING, status: true });

    try {
      const response = await showToast(
        authorizedAxios.delete(`${BASE_URL}/songs/${id}`),
        {
          loading: "Menghapus data...",
          success: "Data master lagu berhasil dihapus!",
          error: (err) => err?.message || "Gagal menghapus data!",
        }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchInvitationSongs());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_INVITATION_SONGS_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_INVITATION_SONGS_LOADING, status: false });
    }
  };
};
