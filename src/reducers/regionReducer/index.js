import { combineReducers } from "redux";
import provinceReducer from "./provinceReducer";
import cityReducer from "./cityReducer";
import districtReducer from "./districtReducer";
import villageReducer from "./villageReducer";

const regionReducer = combineReducers({
  provinces: provinceReducer,
  cities: cityReducer,
  districts: districtReducer,
  villages: villageReducer,
});

export default regionReducer;
