import { configureStore } from '@reduxjs/toolkit';
import bestSellerSlice from './../reducer/bestSellersSlice'
import topBrandsSlice from './../reducer/topBrandSlice'
import cartSlice from '../reducer/cartSlice'
export const store = configureStore({
  reducer: {
    bestSellers: bestSellerSlice,
    topBrands: topBrandsSlice,
    cart:  cartSlice
  }
})