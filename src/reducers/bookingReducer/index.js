import { SET_BOOKINGS, SET_BOOKING, SET_BOOKINGS_ERROR, SET_BOOKINGS_LOADING } from "../../actions/bookingAction";

var initialState = {
  datas: [],
  data: "",
  loading: false,
  error: null,
};

const bookingReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case SET_BOOKINGS:
      return {
        ...state,
        datas: action.data,
      };
    case SET_BOOKING:
      return {
        ...state,
        data: action.data,
      };
    case SET_BOOKINGS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_BOOKINGS_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default bookingReducer;
