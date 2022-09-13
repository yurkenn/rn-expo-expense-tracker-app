import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expenseSlice";

export default configureStore({
  reducer: {
    expenses: expenseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
