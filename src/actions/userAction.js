import axios from 'axios';
import {
  SET_USER,
  SET_LIST_USERS,
  SET_USER_LOADING,
  SET_USER_ERROR,
} from '../constants/actionType';

export const getAllUsers = () => {
  return (dispatch) => {
    dispatch({ type: SET_USER_LOADING, status: true });
    axios
      .get('https://dummyjson.com/users')
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_LIST_USERS,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: SET_USER_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_USER_LOADING, status: false });
      });
  };
};
export const getUserById = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_USER_LOADING, status: true });
    axios
      .get('https://dummyjson.com/users/' + id)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_USER,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: SET_USER_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_USER_LOADING, status: false });
      });
  };
};
export const getSearchUsers = (query) => {
  return (dispatch) => {
    dispatch({ type: SET_USER_LOADING, status: true });
    axios
      .get('https://dummyjson.com/users/search?q=' + query)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch({
            type: SET_LIST_USERS,
            data: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({
          type: SET_USER_ERROR,
          error: error.response.data,
        });
      })
      .finally(() => {
        dispatch({ type: SET_USER_LOADING, status: false });
      });
  };
};
export const addUser = (data) => {
  return (dispatch) => {
    const payload = data;
    axios
      .post('https://dummyjson.com/users/add', payload)
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
export const updateUser = (id, data) => {
  return (dispatch) => {
    const payload = data;
    axios
      .put('https://dummyjson.com/users/' + id, payload)
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
export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete('https://dummyjson.com/users/' + id)
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
