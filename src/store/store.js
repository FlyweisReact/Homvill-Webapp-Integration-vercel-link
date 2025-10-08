import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore, PURGE } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import { apiSlice } from './api/apiSlice';
import { propertyApiSlice } from './api/propertyApiSlice';
import { legalApiSlice } from './api/legalApiSlice';
import { subscriptionApiSlice } from './api/subscriptionApiSlice';
import { documentPreferencesApiSlice } from './api/documentPreferencesApiSlice';
import { notificationActivityApiSlice } from './api/notificationActivityApiSlice';
import { userApiSlice } from './api/userApiSlice';
import { cartApiSlice } from './api/cartApiSlice';
import { contractorsApiSlice } from './api/contractorsApiSlice';
import { buyaHomeApiSlice } from './api/buyaHomeApiSlice';
import authReducer from './slices/authSlice';
import sellHomeReducer from './slices/sellHomeSlice'; // Import the new sellHomeSlice

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [propertyApiSlice.reducerPath]: propertyApiSlice.reducer,
  [legalApiSlice.reducerPath]: legalApiSlice.reducer,
  [subscriptionApiSlice.reducerPath]: subscriptionApiSlice.reducer,
  [documentPreferencesApiSlice.reducerPath]: documentPreferencesApiSlice.reducer,
  [notificationActivityApiSlice.reducerPath]: notificationActivityApiSlice.reducer,
  [userApiSlice.reducerPath]: userApiSlice.reducer,
  [cartApiSlice.reducerPath]: cartApiSlice.reducer,
  [contractorsApiSlice.reducerPath]: contractorsApiSlice.reducer,
  [buyaHomeApiSlice.reducerPath]: buyaHomeApiSlice.reducer,
  auth: authReducer,
  sellHome: sellHomeReducer, // Add sellHomeReducer
});

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['auth', 'sellHome'], // Include sellHome in persistence
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', PURGE],
      },
    }).concat(
      apiSlice.middleware,
      propertyApiSlice.middleware,
      legalApiSlice.middleware,
      subscriptionApiSlice.middleware,
      documentPreferencesApiSlice.middleware,
      notificationActivityApiSlice.middleware,
      userApiSlice.middleware,
      cartApiSlice.middleware,
      contractorsApiSlice.middleware,
      buyaHomeApiSlice.middleware
    ),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);