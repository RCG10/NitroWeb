
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import spinnerReducer from './slices/spinnerSlice';

const rootReducer = combineReducers({
  spinnerOptions: spinnerReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export default store;
