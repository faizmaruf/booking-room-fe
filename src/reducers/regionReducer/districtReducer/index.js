import {
  SET_DISTRICTS,
  SET_DISTRICTS_LOADING,
  SET_DISTRICTS_ERROR,
} from "../../../actions/regionAction/districtAction";
var initialState = {
  datas: [],
  loading: false,
  error: null,
};
const districtReducer = (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case SET_DISTRICTS:
      return {
        ...state,
        datas: action.data,
      };

    case SET_DISTRICTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_DISTRICTS_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default districtReducer;
