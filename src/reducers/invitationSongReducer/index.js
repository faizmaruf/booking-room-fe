import {
  SET_INVITATION_SONGS,
  SET_INVITATION_SONG,
  SET_INVITATION_SONGS_ERROR,
  SET_INVITATION_SONGS_LOADING,
} from "../../actions/invitationSongAction";

var initialState = {
  datas: [],
  data: "",
  loading: false,
  error: null,
};

const invitationSongReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case SET_INVITATION_SONGS:
      return {
        ...state,
        datas: action.data,
      };
    case SET_INVITATION_SONG:
      return {
        ...state,
        data: action.data,
      };
    case SET_INVITATION_SONGS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_INVITATION_SONGS_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default invitationSongReducer;
