// src/store/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      const { token, user } = action.payload;
      if (token) {
        state.isAuthenticated = true;
        state.token = token;
        state.user = user;
        state.error = null;
        state.isLoading = false;
      }
    },
    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload || 'An error occurred during login';
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      state.error = null;
      state.isLoading = false;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, clearError } = authSlice.actions;
export default authSlice.reducer;

// Selectors
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthLoading = (state) => state.auth.isLoading;
export const selectAuthToken = (state) => state.auth.token;