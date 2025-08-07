import {
  SET_INVITATION_PACKAGES,
  SET_INVITATION_PACKAGE,
  SET_INVITATION_PACKAGES_ERROR,
  SET_INVITATION_PACKAGES_LOADING,
} from "../../actions/invitationPackageAction";

var initialState = {
  datas: [],
  data: "",
  loading: false,
  error: null,
};

const invitationPackageReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case SET_INVITATION_PACKAGES:
      return {
        ...state,
        datas: action.data,
      };
    case SET_INVITATION_PACKAGE:
      return {
        ...state,
        data: action.data,
      };
    case SET_INVITATION_PACKAGES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_INVITATION_PACKAGES_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default invitationPackageReducer;
