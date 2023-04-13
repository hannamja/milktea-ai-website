import { configureStore } from "@reduxjs/toolkit";
import { default as userReducer } from "./userSlice";

const rootReducer = {
  user: userReducer,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
