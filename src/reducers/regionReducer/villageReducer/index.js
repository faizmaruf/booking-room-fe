import {
  SET_VILLAGES,
  SET_VILLAGES_LOADING,
  SET_VILLAGES_ERROR,
} from "../../../actions/regionAction/villageAction";
var initialState = {
  datas: [],
  loading: false,
  error: null,
};
const villageReducer = (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case SET_VILLAGES:
      return {
        ...state,
        datas: action.data,
      };

    case SET_VILLAGES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_VILLAGES_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};
export default villageReducer;
