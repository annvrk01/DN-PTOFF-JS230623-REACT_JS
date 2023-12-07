import { createSlice } from '@reduxjs/toolkit';
import { fetchProductsCart, addCart, updateCart, deleteCart, fetchProductCartByUserId } from '../../api/cartApi';

const initialState = {
  data: {},
  isLoading: false,
  isSuccess: false,
  errorMessage: '',
};

const orderSlice = createSlice({
  name: 'orders',
  initialState: initialState,
  reducers: {
    clearCartChangeAccount: (state) => {
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductCartByUserId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductCartByUserId.fulfilled, (state, { payload }) => {
        state.data = payload;
      })
      .addCase(fetchProductCartByUserId.rejected, (state, { payload }) => {
        state.errorMessage = payload;
      })
      .addCase(fetchProductsCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsCart.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload;
      })
      .addCase(fetchProductsCart.rejected, (state, { payload }) => {
        state.errorMessage = payload;
      })
      .addCase(addCart.fulfilled, (state, { payload }) => {
        state.data = payload;
      })
      .addCase(updateCart.fulfilled, (state, { payload }) => {
        state.data = payload;
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        const index = state.data?.products.findIndex((user) => user.id === action.meta.arg);

        if (index !== -1) {
          state.data?.products?.splice(index, 1);
        }
      });
  },
});

const { actions, reducer } = orderSlice;
export const { clearCartChangeAccount } = actions;
export default reducer;
