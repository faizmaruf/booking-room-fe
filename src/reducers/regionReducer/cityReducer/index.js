import {
  SET_CITIES,
  SET_CITIES_LOADING,
  SET_CITIES_ERROR,
} from "../../../actions/regionAction/cityAction";
var initialState = {
  datas: [],
  loading: false,
  error: null,
};

const cityReducer = (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case SET_CITIES:
      return {
        ...state,
        datas: action.data,
      };

    case SET_CITIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_CITIES_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default cityReducer;
