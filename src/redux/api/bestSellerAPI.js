import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"
import {URL_API} from './../../config/index'

export const fetchBestSeller = createAsyncThunk(
    'bestSellers/fetchAll',
    async (thunkAPI) => {
        const response = await axios.get(URL_API  + '/vitamin')
        return response.data;
    }
)