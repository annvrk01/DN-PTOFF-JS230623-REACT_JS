import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slice/userSlice';
import productSlide from '../slice/productSlice';

export const store = configureStore({ reducer: { users: userSlice, products: productSlide } });
