import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productSlice";
import authenticateReducer from "./reducers/autheticateReducer";

// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  },
});

export default store;
