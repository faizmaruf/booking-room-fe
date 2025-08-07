import {
  SET_PRODUCT,
  SET_LIST_PRODUCTS,
  SET_LIST_CATEGORIES_PRODUCTS,
  SET_PRODUCT_LOADING,
  SET_PRODUCT_ERROR,
} from '../../constants/actionType';
var initialState = {
  data: {},
  datas: {},
  categories: {},
  loading: false,
  error: null,
};

const productReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        data: action.data,
      };
    case SET_LIST_PRODUCTS:
      return {
        ...state,
        datas: action.data,
      };
    case SET_LIST_CATEGORIES_PRODUCTS:
      return {
        ...state,
        categories: action.data,
      };
    case SET_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_PRODUCT_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default productReducer;
