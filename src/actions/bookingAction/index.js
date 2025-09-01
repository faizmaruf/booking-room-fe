import { BASE_URL } from "../../helpers/config";
import authorizedAxios from "../../helpers/authorizedAxios";
import { showToast } from "../../utils/helpers/ShowToast";
import Swal from "sweetalert2";
export const SET_BOOKINGS = "SET_BOOKINGS";
export const SET_BOOKING = "SET_BOOKING";
export const SET_BOOKING_BY_MONTH_UNIT = "SET_BOOKING_BY_MONTH_UNIT";
export const SET_BOOKING_BY_ROOM = "SET_BOOKING_BY_ROOM";
export const SET_BOOKINGS_LOADING = "SET_BOOKINGS_LOADING";
export const SET_BOOKINGS_ERROR = "SET_BOOKINGS_ERROR";

export const fetchBookings = (limit = 100, page = 1) => {
  return async (dispatch) => {
    dispatch({ type: SET_BOOKINGS_LOADING, status: true });

    try {
      const response = await authorizedAxios.get("/bookings?limit=" + limit + "&page=" + page);

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_BOOKINGS,
          data: response?.data?.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_BOOKINGS_ERROR,
        error: error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_BOOKINGS_LOADING, status: false });
    }
  };
};
export const fetchBookingsPublic = (limit = 100, page = 1) => {
  return async (dispatch) => {
    dispatch({ type: SET_BOOKINGS_LOADING, status: true });

    try {
      const response = await authorizedAxios.get("public/bookings?limit=" + limit + "&page=" + page);

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_BOOKINGS,
          data: response?.data?.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_BOOKINGS_ERROR,
        error: error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_BOOKINGS_LOADING, status: false });
    }
  };
};

export const getBookingById = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_BOOKINGS_LOADING, status: true });

    try {
      const response = await authorizedAxios.get("/bookings/" + id);

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_BOOKING,
          data: response.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_BOOKINGS_ERROR,
        error: error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_BOOKINGS_LOADING, status: false });
    }
  };
};
export const getBookingsByMonthUnit = (date) => {
  return async (dispatch) => {
    dispatch({ type: SET_BOOKINGS_LOADING, status: true });

    try {
      const response = await authorizedAxios.get("/bookings/get-booking-by-month-unit?date" + date);

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_BOOKING_BY_MONTH_UNIT,
          data: response.data?.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_BOOKINGS_ERROR,
        error: error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_BOOKINGS_LOADING, status: false });
    }
  };
};
export const getBookingsByRoom = (date) => {
  return async (dispatch) => {
    dispatch({ type: SET_BOOKINGS_LOADING, status: true });

    try {
      const response = await authorizedAxios.get("/bookings/get-booking-by-room?date" + date);

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: SET_BOOKING_BY_ROOM,
          data: response.data?.data,
        });
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_BOOKINGS_ERROR,
        error: error?.response?.data || "Terjadi kesalahan saat mengambil data.",
      });
    } finally {
      dispatch({ type: SET_BOOKINGS_LOADING, status: false });
    }
  };
};

export const addBooking = (data) => {
  return async (dispatch) => {
    dispatch({ type: SET_BOOKINGS_LOADING, status: true });

    try {
      const response = await showToast(authorizedAxios.post(`${BASE_URL}/bookings`, data), {
        loading: "Menyimpan data...",
        success: "Data Booking berhasil ditambahkan!",
        error: (err) => err?.response?.data?.message || "Gagal menyimpan data!",
      });
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchBookings());
        Swal.fire("Sukses", "Data Booking berhasil ditambahkan!", "success");
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_BOOKINGS_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_BOOKINGS_LOADING, status: false });
    }
  };
};

export const updateBooking = (id, data) => {
  return async (dispatch) => {
    dispatch({ type: SET_BOOKINGS_LOADING, status: true });
    console.log(data);

    try {
      const response = await showToast(authorizedAxios.put(`${BASE_URL}/bookings/${id}`, data), {
        loading: "Mengupdate data...",
        success: "Data role berhasil diupdate!",
        error: (err) => err?.response?.data?.message || "Gagal mengupdate data!",
      });
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchBookings());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_BOOKINGS_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_BOOKINGS_LOADING, status: false });
    }
  };
};

export const deleteBooking = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_BOOKINGS_LOADING, status: true });

    try {
      const response = await showToast(authorizedAxios.delete(`${BASE_URL}/bookings/${id}`), {
        loading: "loading data...",
        success: "Data role berhasil dihapus!",
        error: (err) => err?.response?.data?.message || "Gagal loading data!",
      });
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchBookings());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_BOOKINGS_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_BOOKINGS_LOADING, status: false });
    }
  };
};

export const rejectBooking = (id, data) => {
  return async (dispatch) => {
    dispatch({ type: SET_BOOKINGS_LOADING, status: true });

    try {
      const response = await showToast(authorizedAxios.put(`${BASE_URL}/bookings/${id}/reject`, data), {
        loading: "loading data...",
        success: "Berhasil menolak booking!",
        error: (err) => err?.message || "Gagal loading data!",
      });
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchBookings());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_BOOKINGS_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_BOOKINGS_LOADING, status: false });
    }
  };
};

export const approveBooking = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_BOOKINGS_LOADING, status: true });

    try {
      const response = await showToast(authorizedAxios.put(`${BASE_URL}/bookings/${id}/approve`), {
        loading: "loading data...",
        success: "Berhasil menyetujui booking!",
        error: (err) => err?.message || "Gagal loading data!",
      });
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchBookings());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_BOOKINGS_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_BOOKINGS_LOADING, status: false });
    }
  };
};

export const cancelBooking = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_BOOKINGS_LOADING, status: true });

    try {
      const response = await showToast(authorizedAxios.put(`${BASE_URL}/bookings/${id}/cancel`), {
        loading: "loading data...",
        success: "Berhasil membatalkan booking!",
        error: (err) => err?.message || "Gagal loading data!",
      });
      if (response.status === 200 || response.status === 201) {
        dispatch(fetchBookings());
      }
    } catch (error) {
      console.error("error", error);
      dispatch({
        type: SET_BOOKINGS_ERROR,
        error: error?.message || "Terjadi kesalahan.",
      });
    } finally {
      dispatch({ type: SET_BOOKINGS_LOADING, status: false });
    }
  };
};
