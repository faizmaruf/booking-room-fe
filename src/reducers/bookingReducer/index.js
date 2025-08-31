import { da } from "date-fns/locale";
import {
  SET_BOOKINGS,
  SET_BOOKING,
  SET_BOOKING_BY_MONTH_UNIT,
  SET_BOOKING_BY_ROOM,
  SET_BOOKINGS_ERROR,
  SET_BOOKINGS_LOADING,
} from "../../actions/bookingAction";

var initialState = {
  datas: [],
  data: "",
  dataByMonthUnit: [],
  dataByRoom: [],
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
    case SET_BOOKING_BY_MONTH_UNIT:
      return {
        ...state,
        dataByMonthUnit: action.data,
      };
    case SET_BOOKING_BY_ROOM:
      return {
        ...state,
        dataByRoom: action.data,
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
