import axios from 'axios';
import {
  SET_PRODUCT_CATEGORIES,
  SET_PRODUCT_CATEGORIES_LOADING,
  SET_PRODUCT_CATEGORIES_ERROR,
} from '../constants/actionType';

export const getAllProductsCategories = () => {
  return (dispatch) => {
    dispatch({ type: SET_PRODUCT_CATEGORIES_LOADING, status: true });
    axios
      .get('https://dummyjson.com/products/categories/')
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_PRODUCT_CATEGORIES,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: SET_PRODUCT_CATEGORIES_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_PRODUCT_CATEGORIES_LOADING, status: false });
      });
  };
};
export const getProductsCategoryById = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_PRODUCT_CATEGORIES_LOADING, status: true });
    axios
      .get('https://dummyjson.com/products/category/' + id)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_PRODUCT_CATEGORIES,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: SET_PRODUCT_CATEGORIES_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_PRODUCT_CATEGORIES_LOADING, status: false });
      });
  };
};
export const getSearchProductCategory = (query) => {
  return (dispatch) => {
    dispatch({ type: SET_PRODUCT_CATEGORIES_LOADING, status: true });
    axios
      .get('https://dummyjson.com/products/category/search?q=' + query)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_PRODUCT_CATEGORIES,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: SET_PRODUCT_CATEGORIES_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_PRODUCT_CATEGORIES_LOADING, status: false });
      });
  };
};
export const addProductCategory = (data) => {
  return (dispatch) => {
    const payload = data;
    axios
      .post('https://dummyjson.com/products/category/add', payload)
      .then((response) => {
        if (response?.status == 200 || response?.status == 201) {
          setTimeout(() => {
            dispatch();
          }, 1000);
          dispatch();
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {});
  };
};
export const updateOrder = (id, data) => {
  return (dispatch) => {
    const payload = data;
    axios
      .put('https://dummyjson.com/products/category/' + id, payload)
      .then((response) => {
        if (response?.status == 200 || response?.status == 201) {
          setTimeout(() => {
            dispatch();
          }, 1000);
          dispatch();
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {});
  };
};
export const deleteOrder = (id) => {
  return (dispatch) => {
    axios
      .delete('https://dummyjson.com/products/category/' + id)
      .then((response) => {
        if (response?.status == 200 || response?.status == 201) {
          setTimeout(() => {
            dispatch();
          }, 1000);
          dispatch();
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {});
  };
};
