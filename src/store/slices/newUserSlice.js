// src/redux/slices/exampleSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  user: null,
  loading: false,
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    setCount: (state, action) => {
      state.count = action.payload;
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    reset: () => initialState, // reset everything
  },
});

export const { setCount, increment, decrement, setUser, setLoading, reset } =
  exampleSlice.actions;

export default exampleSlice.reducer;
