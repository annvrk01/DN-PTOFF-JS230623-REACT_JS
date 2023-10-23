import { createSlice } from '@reduxjs/toolkit';
import { addUser, deleteUser, fetchUser, fetchUsers, updateUser } from '../../api/userApi';

const initialState = {
  data: [],
  userCurrent: {},
  userProductsOrder: [],
  token: null,
  isLoading: false,
  isSuccess: false,
  errorMessage: '',
};

const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    addUserCurrent(state, { payload }) {
      const { token, dataUser } = payload;

      state.userCurrent = dataUser;
      state.token = token;

      dataUser.role === 'admin'
        ? localStorage.setItem('data_admin', JSON.stringify(dataUser))
        : localStorage.setItem('data_user', JSON.stringify(dataUser));
      localStorage.setItem('token', token);
    },
    deleteUserCurrent(state) {
      state.userCurrent = {};
      state.userCart = {};
      state.token = '';
      localStorage.removeItem('data_user');
      localStorage.removeItem('data_admin');
      localStorage.removeItem('data_cart');
      localStorage.removeItem('token');
    },
    addProductOrder(state, { payload }) {
      state.userProductsOrder = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.errorMessage = payload;
      })
      .addCase(addUser.fulfilled, (state, { payload }) => {
        state.data.push(payload);
      })
      .addCase(updateUser.pending, (state, { payload }) => {
        state.isSuccess = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const index = state.data.findIndex((user) => user.id === payload.id);
        state.data.splice(index, 1, payload);
        state.isSuccess = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const index = state.data.findIndex((user) => user.id === action.meta.arg);
        if (index !== -1) {
          state.data.splice(index, 1);
        }
      });
  },
});

const { actions, reducer } = userSlice;
export const { addUserCurrent, deleteUserCurrent, addProductOrder } = actions;
export default reducer;
