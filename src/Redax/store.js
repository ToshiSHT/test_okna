'use client';
import { configureStore } from '@reduxjs/toolkit';
import mainMenuReducer from './menu/slices/mainMenuSlice';
import { menuAPI, menuAPIReducer } from './menu/menuAPI';

const store = configureStore({
    reducer: {
        menu: mainMenuReducer,
        [menuAPI.reducerPath]: menuAPIReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(menuAPI.middleware),
});
export default store;
