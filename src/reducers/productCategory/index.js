import {
  SET_PRODUCT_CATEGORIES,
  SET_PRODUCT_CATEGORIES_LOADING,
  SET_PRODUCT_CATEGORIES_ERROR,
} from '../../constants/actionType';
var initialState = {
  categories: [],
  loading: false,
  error: null,
};

const productCategoryReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case SET_PRODUCT_CATEGORIES:
      return {
        ...state,
        categories: action.data,
      };
    case SET_PRODUCT_CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_PRODUCT_CATEGORIES_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default productCategoryReducer;
