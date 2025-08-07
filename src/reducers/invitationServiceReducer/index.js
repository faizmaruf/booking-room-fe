import {
  SET_INVITATION_SERVICES,
  SET_INVITATION_SERVICE,
  SET_INVITATION_SERVICES_ERROR,
  SET_INVITATION_SERVICES_LOADING,
} from "../../actions/invitationServiceAction";

var initialState = {
  datas: [],
  data: "",
  loading: false,
  error: null,
};

const invitationServiceReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case SET_INVITATION_SERVICES:
      return {
        ...state,
        datas: action.data,
      };
    case SET_INVITATION_SERVICE:
      return {
        ...state,
        data: action.data,
      };
    case SET_INVITATION_SERVICES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_INVITATION_SERVICES_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default invitationServiceReducer;
