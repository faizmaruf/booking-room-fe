import {
  SET_PERMISSIONS,
  SET_PERMISSION,
  SET_PERMISSIONS_ERROR,
  SET_PERMISSIONS_LOADING,
} from "../../actions/permissionAction";

var initialState = {
  datas: [],
  data: "",
  loading: false,
  error: null,
};

const permissionReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case SET_PERMISSIONS:
      return {
        ...state,
        datas: action.data,
      };
    case SET_PERMISSION:
      return {
        ...state,
        data: action.data,
      };
    case SET_PERMISSIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_PERMISSIONS_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default permissionReducer;
