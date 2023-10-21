import { createSlice} from "@reduxjs/toolkit";
import { fetchProductList } from "../api/productListAPI";
const productListSlice = createSlice({
  name:'bestSellers',
  initialState:{
    data :[],
  },
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.data = action.payload
    });
  },
})
const {actions, reducer} = productListSlice
export const {} = actions
export default reducer
