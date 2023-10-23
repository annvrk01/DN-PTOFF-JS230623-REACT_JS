import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slice/userSlice';
import productSlide from '../slice/productSlice';
import cartSlice from '../slice/cartSlice';

export const store = configureStore({ reducer: { users: userSlice, products: productSlide, cart: cartSlice } });
