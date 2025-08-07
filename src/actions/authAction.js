import axios from 'axios';
export const userLogin = (data) => {
  return (dispatch) => {
    const payload = data;
    axios
      .post('https://dummyjson.com/auth/login', payload)
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
