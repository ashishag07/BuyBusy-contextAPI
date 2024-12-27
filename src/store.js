import { configureStore } from "@reduxjs/toolkit";

import { usersReducer } from "./redux/userSlice";

const store = configureStore({
  reducer: { usersReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
