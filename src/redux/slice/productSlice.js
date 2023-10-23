import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, addProduct, updateProduct, deleteProduct, fetchProduct } from '../../api/productApi';

const initialState = {
  data: [],
  productDetail: {},
  productCart: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.productDetail = payload;
      })
      .addCase(fetchProduct.rejected, (state, { payload }) => {
        state.errorMessage = payload;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload;
      })
      .addCase(fetchProducts.rejected, (state, { payload }) => {
        state.errorMessage = payload;
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.data.push(payload);
      })
      .addCase(updateProduct.fulfilled, (state, { payload }) => {
        const index = state.data.findIndex((user) => user.id === payload.id);
        state.data.splice(index, 1, payload);
        state.user = payload;
        state.selectedItems = [];
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const index = state.data.findIndex((user) => user.id === action.meta.arg);
        if (index !== -1) {
          state.data.splice(index, 1);
        }
      });
  },
});

const { actions, reducer } = productSlice;
export default reducer;
