import { createSlice } from "@reduxjs/toolkit";
import {fetchTopBrand} from "../api/topBrandAPI"
const topBrandsSlice = createSlice({
    name:'topBrands',
    initialState:{
        data:[],
        isloading:false
    },
    reducers:{
        addTopBrandProduct(state, action){},
        removeTopBrandProduct(state, action){},
        updateTopBrandProduct(state, action){}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTopBrand.fulfilled, (state, action)=> {
            state.data = action.payload
        })
    }
})
const {actions, reducer} = topBrandsSlice
export const {addTopBrandProduct,removeTopBrandProduct,updateTopBrandProduct} = actions
export default reducer