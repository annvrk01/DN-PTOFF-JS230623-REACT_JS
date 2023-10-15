import { URL_API } from "../../config/index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchTopBrand = createAsyncThunk(
    'topBrand/fetchAll',
    async(thunkAPI) => {
        const response = await axios.get(URL_API+ '/thankinhnao')
        return response.data
    }
)
