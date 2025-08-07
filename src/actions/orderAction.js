import axios from 'axios';
import {
  SET_ORDER,
  SET_LIST_ORDERS,
  SET_ORDER_LOADING,
  SET_ORDER_ERROR,
} from '../constants/actionType';

export const getAllOrders = () => {
  return (dispatch) => {
    dispatch({ type: SET_ORDER_LOADING, status: true });
    axios
      .get('https://dummyjson.com/orders')
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_LIST_ORDERS,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: SET_ORDER_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_ORDER_LOADING, status: false });
      });
  };
};
export const getOrderById = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_ORDER_LOADING, status: true });
    axios
      .get('https://dummyjson.com/orders/' + id)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_ORDER,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: SET_ORDER_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_ORDER_LOADING, status: false });
      });
  };
};
export const getSearchOrders = (query) => {
  return (dispatch) => {
    dispatch({ type: SET_ORDER_LOADING, status: true });
    axios
      .get('https://dummyjson.com/orders/search?q=' + query)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_LIST_ORDERS,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: SET_ORDER_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_ORDER_LOADING, status: false });
      });
  };
};
export const addOrder = (data) => {
  return (dispatch) => {
    const payload = data;
    axios
      .post('https://dummyjson.com/orders/add', payload)
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
      .put('https://dummyjson.com/orders/' + id, payload)
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
      .delete('https://dummyjson.com/orders/' + id)
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
