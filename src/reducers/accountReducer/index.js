import {
  SET_ACCOUNTS,
  SET_ACCOUNT,
  SET_ACCOUNTS_ERROR,
  SET_ACCOUNTS_LOADING,
} from "../../actions/accountAction";

var initialState = {
  datas: [],
  data: "",
  loading: false,
  error: null,
};

const accountReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case SET_ACCOUNTS:
      return {
        ...state,
        datas: action.data,
      };
    case SET_ACCOUNT:
      return {
        ...state,
        data: action.data,
      };
    case SET_ACCOUNTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_ACCOUNTS_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default accountReducer;
