import {
  SET_ROLES,
  SET_ROLE,
  SET_ROLES_ERROR,
  SET_ROLES_LOADING,
} from "../../actions/roleAction";

var initialState = {
  datas: [],
  data: "",
  loading: false,
  error: null,
};

const roleReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case SET_ROLES:
      return {
        ...state,
        datas: action.data,
      };
    case SET_ROLE:
      return {
        ...state,
        data: action.data,
      };
    case SET_ROLES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_ROLES_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default roleReducer;
