import { SET_WAYBILL_DATA } from "../../actions/index.js";

const initialState = {
  data: [],
};

const waybillReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case SET_WAYBILL_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};
export default waybillReducer;
