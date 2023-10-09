import { createSlice } from '@reduxjs/toolkit';
import { getUsers, addUser, updateUser, deleteUser, getUser } from '../../pages/site-admin/api/userApi';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    userUpdate: {},
    selectedItems: [],
    selectAll: false,
    isLoading: false,
    isSuccess: false,
    errorMessage: '',
  },
  reducers: {
    toggleSelectAll: (state, { payload }) => {
      state.selectAll = !state.selectAll;
      if (!state.selectAll) {
        state.selectedItems = [];
      } else {
        state.selectedItems = state.data.map((user) => user.id);
      }
    },
    toggleSelectItem: (state, { payload }) => {
      const index = state.selectedItems.indexOf(payload);
      if (index === -1) {
        state.selectedItems.push(payload);
      } else {
        state.selectedItems.splice(index, 1);
      }
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
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userUpdate = payload;
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

        console.log(action);
      });
  },
});

const { actions, reducer } = userSlice;
export const { toggleSelectAll, toggleSelectItem } = actions;
export default reducer;
