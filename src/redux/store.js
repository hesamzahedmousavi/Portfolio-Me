import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./form/formSlice.js";

export const store = configureStore({
  reducer: {
    form: formSlice,
  },
});
