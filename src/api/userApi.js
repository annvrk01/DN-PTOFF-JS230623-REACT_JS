import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from './axiosClient';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async (_, thunkAPI) => {
  const res = await axiosClient.get('/users', {
    signal: thunkAPI.signal,
  });

  return res.data;
});

export const fetchUser = createAsyncThunk('user/fetchUser', async (userId, thunkAPI) => {
  const res = await axiosClient.get(`/users/${userId}`, {
    signal: thunkAPI.signal,
  });

  return res.data;
});

export const addUser = createAsyncThunk('user/addUser', async (user, thunkAPI) => {
  const res = await axiosClient.post('/users', user, {
    signal: thunkAPI.signal,
  });

  return res.data;
});

export const updateUser = createAsyncThunk('user/updateUser', async (user, thunkAPI) => {
  const res = await axiosClient.put(`/users/${user.id}`, user, {
    signal: thunkAPI.signal,
  });

  return res.data;
});

export const deleteUser = createAsyncThunk('user/deleteUser', async (userId, thunkAPI) => {
  await axiosClient.delete(`/users/${userId}`, {
    signal: thunkAPI.signal,
  });

  return userId;
});
