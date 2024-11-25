// store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { groupsApi } from './services/groupsApi';
import  counterSlice  from '../components/Redux/ReduxSlice';
import { profileApi } from './services/profileApi';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [], // Add reducers here when needed, e.g., ['auth']
};

// Combine reducers
const rootReducer = combineReducers({
  home: counterSlice.reducer,
  [groupsApi.reducerPath]: groupsApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  // Add more reducers as needed
});

// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disables warnings for non-serializable values
    }).concat(
      profileApi.middleware,
      groupsApi.middleware,
      // Add other middlewares as needed
    ),
});

// Persistor for managing persisted state
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;