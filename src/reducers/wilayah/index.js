import {
  SET_LIST_PROVINSI,
  SET_LIST_KABUPATEN,
  SET_LIST_KECAMATAN,
  SET_LIST_KELURAHAN,
  SET_LIST_WILAYAH_LOADING,
  SET_LIST_WILAYAH_ERROR,
} from '../../constants/actionType';
var initialState = {
  data: {
    provinsi: [],
    kabupaten: [],
    kecamatan: [],
    kelurahan: [],
  },
  loading: false,
  error: null,
};

const wilayahReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case SET_LIST_PROVINSI:
      return {
        ...state,
        data: {
          ...state.data,
          provinsi: action.data,
        },
      };
    case SET_LIST_KABUPATEN:
      return {
        ...state,
        data: {
          ...state.data,
          kabupaten: action.data,
        },
      };
    case SET_LIST_KECAMATAN:
      return {
        ...state,
        data: {
          ...state.data,
          kecamatan: action.data,
        },
      };
    case SET_LIST_KELURAHAN:
      return {
        ...state,
        data: {
          ...state.data,
          kelurahan: action.data,
        },
      };
    case SET_LIST_WILAYAH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_LIST_WILAYAH_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default wilayahReducer;
