import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

const authReducer = combineReducers({
  login: loginReducer,
});

export default authReducer;
