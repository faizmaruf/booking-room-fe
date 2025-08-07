import axios from 'axios';
import {
  SET_LIST_PROVINSI,
  SET_LIST_KABUPATEN,
  SET_LIST_KECAMATAN,
  SET_LIST_KELURAHAN,
  SET_LIST_WILAYAH_LOADING,
  SET_LIST_WILAYAH_ERROR,
} from '../constants/actionType';

export const getListProvinsi = () => {
  return (dispatch) => {
    dispatch({ type: SET_LIST_WILAYAH_LOADING, status: true });
    axios
      .get('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_LIST_PROVINSI,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: SET_LIST_WILAYAH_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_LIST_WILAYAH_LOADING, status: false });
      });
  };
};
export const getListKabupaten = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_LIST_WILAYAH_LOADING, status: true });
    axios
      .get(
        'https://www.emsifa.com/api-wilayah-indonesia/api/regencies/' +
          id +
          '.json'
      )
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_LIST_KABUPATEN,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: SET_LIST_WILAYAH_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_LIST_WILAYAH_LOADING, status: false });
      });
  };
};
export const getListKecamatan = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_LIST_WILAYAH_LOADING, status: true });
    axios
      .get(
        'https://www.emsifa.com/api-wilayah-indonesia/api/districts/' +
          id +
          '.json'
      )
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_LIST_KECAMATAN,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: SET_LIST_WILAYAH_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_LIST_WILAYAH_LOADING, status: false });
      });
  };
};
export const getListKelurahan = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_LIST_WILAYAH_LOADING, status: true });
    axios
      .get(
        'https://www.emsifa.com/api-wilayah-indonesia/api/villages/' +
          id +
          '.json'
      )
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_LIST_KELURAHAN,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: SET_LIST_WILAYAH_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_LIST_WILAYAH_LOADING, status: false });
      });
  };
};
