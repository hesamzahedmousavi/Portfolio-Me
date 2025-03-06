import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    email: "",
    message: "",
    errors: {
      email: false,
    },
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setError: (state, action) => {
      const { field, value } = action.payload;
      state.errors[field] = value;
    },
    resetForm: (state) => {
      state.email = "";
      state.message = "";
      state.errors = {
        email: false,
      };
    },
  },
});

export const { setMessage, setEmail, setError, resetForm } = formSlice.actions;

export default formSlice.reducer;
