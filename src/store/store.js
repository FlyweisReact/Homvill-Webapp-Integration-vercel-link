// src/store/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore, PURGE } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import { apiSlice } from './api/apiSlice';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', PURGE],
      },
    }).concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);