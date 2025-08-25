import { SET_ROOMS, SET_ROOM, SET_ROOMS_ERROR, SET_ROOMS_LOADING } from "../../actions/roomAction";

var initialState = {
  datas: [],
  data: "",
  loading: false,
  error: null,
};

const roomReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case SET_ROOMS:
      return {
        ...state,
        datas: action.data,
      };
    case SET_ROOM:
      return {
        ...state,
        data: action.data,
      };
    case SET_ROOMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_ROOMS_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default roomReducer;
