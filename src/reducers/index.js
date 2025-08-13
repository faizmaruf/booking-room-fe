// reducers.js
import { combineReducers } from "redux";
import waybillReducer from "./waybill";
import productReducer from "./product";
import orderReducer from "./order";
import regionReducer from "./regionReducer";
import authReducer from "./authReducer";
import accountReducer from "./accountReducer";
import roleReducer from "./roleReducer";
import workUnitReducer from "./workUnitReducer";
import permissionReducer from "./permissionReducer";

const rootReducer = combineReducers({
  waybill: waybillReducer,
  products: productReducer,
  orders: orderReducer,
  regions: regionReducer,
  auth: authReducer,
  accounts: accountReducer,
  roles: roleReducer,
  permissions: permissionReducer,
  workUnits: workUnitReducer,
});

export default rootReducer;
