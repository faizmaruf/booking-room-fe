import {
  SET_LOGIN,
  SET_LOGIN_LOADING,
  SET_LOGIN_ERROR,
} from "../../../actions/authAction/loginAction";

var initialState = {
  data: "",
  loading: false,
  error: null,
};
const loginReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        data: action.data,
      };
    case SET_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_LOGIN_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};
export default loginReducer;
