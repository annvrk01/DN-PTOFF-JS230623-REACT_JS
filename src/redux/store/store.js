import { configureStore } from '@reduxjs/toolkit';
import requestSlice from './../reducer/requestSlice';
import userSlice from './../reducer/userSlice';

export const store = configureStore({
    reducer: {
        request: requestSlice,
        user: userSlice
    },
});