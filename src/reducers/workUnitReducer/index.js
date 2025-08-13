import { SET_WORK_UNITS, SET_WORK_UNIT, SET_WORK_UNITS_ERROR, SET_WORK_UNITS_LOADING } from "../../actions/workUnitAction";

var initialState = {
  datas: [],
  data: "",
  loading: false,
  error: null,
};

const workUnitReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case SET_WORK_UNITS:
      return {
        ...state,
        datas: action.data,
      };
    case SET_WORK_UNIT:
      return {
        ...state,
        data: action.data,
      };
    case SET_WORK_UNITS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_WORK_UNITS_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default workUnitReducer;
