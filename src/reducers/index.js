// reducers.js
import { combineReducers } from "redux";
import waybillReducer from "./waybill";
import productReducer from "./product";
import orderReducer from "./order";
import regionReducer from "./regionReducer";
import authReducer from "./authReducer";
import accountReducer from "./accountReducer";
import roleReducer from "./roleReducer";
import permissionReducer from "./permissionReducer";
import invitationPackageReducer from "./invitationPackageReducer";
import invitationServiceReducer from "./invitationServiceReducer";
import invitationSongReducer from "./invitationSongReducer";

const rootReducer = combineReducers({
  waybill: waybillReducer,
  products: productReducer,
  orders: orderReducer,
  regions: regionReducer,
  auth: authReducer,
  accounts: accountReducer,
  roles: roleReducer,
  permissions: permissionReducer,
  invitationPackages: invitationPackageReducer,
  invitationServices: invitationServiceReducer,
  invitationSongs: invitationSongReducer,
});

export default rootReducer;
