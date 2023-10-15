import { createSlice, current } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name:'cart',
  initialState:{
    cartItems :[],
    cartTotalQuantity:0,
    cartTotalAmount:0,
  },
  reducers: {
    addToCart:(state, action) => {   
      state.cartItems.push(action.payload)
    }
  },
})
export const {addToCart} = CartSlice.actions
export default CartSlice.reducer
