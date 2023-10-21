import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"
import {URL_API} from './../../config/index'

export const fetchProductList = createAsyncThunk(
    'bestSellers/fetchAll',
    async (thunkAPI) => {
        const response = await axios.get(URL_API  + '/productList')
        return response.data;
    }
)