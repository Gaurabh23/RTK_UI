import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "@reduxjs/toolkit";

import user from "./users";

// const reducer = combineReducers({
//   user,
// });

const store = configureStore({
  reducer: user,
});

export default store;
