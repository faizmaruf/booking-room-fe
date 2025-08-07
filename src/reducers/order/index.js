import {
  SET_ORDER,
  SET_LIST_ORDERS,
  SET_ORDER_LOADING,
  SET_ORDER_ERROR,
} from '../../constants/actionType';
var initialState = {
  data: {},
  datas: {},
  categories: {},
  loading: false,
  error: null,
};

const orderReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        data: action.data,
      };
    case SET_LIST_ORDERS:
      return {
        ...state,
        datas: action.data,
      };
    case SET_ORDER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_ORDER_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default orderReducer;
