import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import axios from "axios";



export const  fetchUser = createAsyncThunk(
    'users/fetchAll;',
    async ( thunkAPI) => {
      const response = await axios.get('http://localhost:3000/users')
      return response.data
    }
  )
 