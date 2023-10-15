import { createSlice, current } from "@reduxjs/toolkit";
import { fetchBestSeller } from "../api/bestSellerAPI";

const bestSellerSlice = createSlice({
  name:'bestSellers',
  initialState:{
    data :[],
    isLoading: false
  },
  reducers: {
    addBestSellerProduct (state, action){},
    removeBestSellerProduct(state, action){},
    updateBestSellerProduct(state, action){},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBestSeller.fulfilled, (state, action) => {
      state.data= action.payload
    })
  },
})
const {actions, reducer} = bestSellerSlice
export const {addBestSellerProduct, removeBestSellerProduct, updateBestSellerProduct} = actions
export default reducer
