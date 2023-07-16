'use client';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeMenu: '001',
    activeSubMenu: null,
    activeThirdMenu: null,
};

const mainMenuSlice = createSlice({
    name: 'menu',
    initialState: initialState,
    reducers: {
        setActiveMenu: (state, action) => {
            state.activeMenu = action.payload;
        },
        setActiveSubMenu: (state, action) => {
            state.activeSubMenu = action.payload;
        },
        setActiveThirdMenu: (state, action) => {
            state.activeThirdMenu = action.payload;
        },
    },
});

export const { setActiveMenu, setActiveSubMenu, setActiveThirdMenu } =
    mainMenuSlice.actions;
export default mainMenuSlice.reducer;
