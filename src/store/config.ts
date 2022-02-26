import { newsApi } from './../common/api/api';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { settingsSlice } from '../common/ducks/settings';

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    [settingsSlice.name]: settingsSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
