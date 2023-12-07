import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from './axiosClient';

export const fetchProducts = createAsyncThunk('product/getProducts', async (_, thunkAPI) => {
  const res = await axiosClient.get('/products', {
    signal: thunkAPI.signal,
  });

  return res.data;
});

export const fetchProduct = createAsyncThunk('product/getProduct', async (productId, thunkAPI) => {
  const res = await axiosClient.get(`/products/${productId}`, {
    signal: thunkAPI.signal,
  });

  return res.data;
});

export const addProduct = createAsyncThunk('product/addProduct', async (product, thunkAPI) => {
  const res = await axiosClient.post('/products', product, {
    signal: thunkAPI.signal,
  });

  return res.data;
});

export const updateProduct = createAsyncThunk('product/updateProduct', async (product, thunkAPI) => {
  const res = await axiosClient.put(`/products/${product.id}`, product, {
    signal: thunkAPI.signal,
  });

  return res.data;
});

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (productId, thunkAPI) => {
  const res = await axiosClient.delete(`/products/${productId}`, {
    signal: thunkAPI.signal,
  });

  return res.data;
});
