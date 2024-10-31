// store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { userAuthApi } from '../services/userAuthApi';
import { userProfileApi } from '../services/userProfileApi';
import { groupsApi } from './services/groupsApi';

const rootReducer = combineReducers({
    [groupsApi.reducerPath]: groupsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        groupsApi.middleware,


    ),
});
