import { combineReducers } from "redux";
import authenticateReducer from "./autheticateReducer";
import productReducer from "./productSlice";

export default combineReducers({
  auth: authenticateReducer,
  product: productReducer,
});
