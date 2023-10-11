import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import productReducer,{productsFetch} from '../reducer/productSlice';
import { productsApi } from '../api/productAPI'
export  const store = configureStore({
  reducer: {
    products: productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(productsApi.middleware)
})
store.dispatch(productsFetch());
