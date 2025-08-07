import axios from 'axios';
import {
  SET_PRODUCT,
  SET_LIST_PRODUCTS,
  SET_LIST_CATEGORIES_PRODUCTS,
  SET_PRODUCT_LOADING,
  SET_PRODUCT_ERROR,
} from '../constants/actionType';

export const getAllProducts = () => {
  return (dispatch) => {
    dispatch({ type: SET_PRODUCT_LOADING, status: true });
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_LIST_PRODUCTS,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: SET_PRODUCT_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_PRODUCT_LOADING, status: false });
      });
  };
};
export const getProductById = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_PRODUCT_LOADING, status: true });
    axios
      .get('https://dummyjson.com/products/' + id)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_PRODUCT,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: SET_PRODUCT_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_PRODUCT_LOADING, status: false });
      });
  };
};
export const getSearchProducts = (query) => {
  return (dispatch) => {
    dispatch({ type: SET_PRODUCT_LOADING, status: true });
    axios
      .get('https://dummyjson.com/products/search?q=' + query)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_LIST_PRODUCTS,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: SET_PRODUCT_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_PRODUCT_LOADING, status: false });
      });
  };
};
export const getAllProductsCategories = () => {
  return (dispatch) => {
    dispatch({ type: SET_PRODUCT_LOADING, status: true });
    axios
      .get('https://dummyjson.com/products/categories/')
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_LIST_CATEGORIES_PRODUCTS,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: SET_PRODUCT_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_PRODUCT_LOADING, status: false });
      });
  };
};
export const getAllProductsByCategory = (category) => {
  return (dispatch) => {
    dispatch({ type: SET_PRODUCT_LOADING, status: true });
    axios
      .get('https://dummyjson.com/products/category/' + category)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_LIST_PRODUCTS,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: SET_PRODUCT_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_PRODUCT_LOADING, status: false });
      });
  };
};
export const addProduct = (data) => {
  return (dispatch) => {
    const payload = data;
    axios
      .post('https://dummyjson.com/products/add', payload)
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
export const updateProduct = (id, data) => {
  return (dispatch) => {
    const payload = data;
    axios
      .put('https://dummyjson.com/products/' + id, payload)
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
export const deleteProduct = (id) => {
  return (dispatch) => {
    axios
      .delete('https://dummyjson.com/products/' + id)
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
