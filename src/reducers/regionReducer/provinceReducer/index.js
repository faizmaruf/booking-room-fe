import {
  SET_PROVINCES,
  SET_PROVINCES_LOADING,
  SET_PROVINCES_ERROR,
} from "../../../actions/regionAction/provinceAction";
var initialState = {
  datas: [],
  loading: false,
  error: null,
};

const provinceReducer = (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case SET_PROVINCES:
      return {
        ...state,
        datas: action.data,
      };

    case SET_PROVINCES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_PROVINCES_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default provinceReducer;
