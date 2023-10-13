import { createSlice } from '@reduxjs/toolkit';
import { addUser, deleteUser, getUsers, updateUser } from '../../api/userApi';

const initialState = {
  data: [],
  userCurrent: {},
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

      console.log(payload);

      state.userCurrent = dataUser;
      state.token = token;
      localStorage.setItem('dataUser', JSON.stringify(dataUser));
      localStorage.setItem('token', token);
    },
    deleteUserCurrent(state, _) {
      state.userCurrent = {};
      state.token = '';
      localStorage.removeItem('dataUser');
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.errorMessage = payload;
      })
      .addCase(addUser.fulfilled, (state, { payload }) => {
        state.data.push(payload);
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const index = state.data.findIndex((user) => user.id === payload.id);
        state.data.splice(index, 1, payload.user);
        state.selectedItems = [];
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
export const { addUserCurrent, deleteUserCurrent } = actions;
export default reducer;
