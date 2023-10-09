import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: [
    {
      id: 1,
      name: 'Điện thoại iPhone 13 Pro',
      description: 'Điện thoại di động cao cấp từ Apple với camera tiên tiến và hiệu suất mạnh mẽ.',
      price: 14990000,
      quantity: 50,
      imageUrl: [
        'https://source.unsplash.com/random/750x750?product=1',
        'https://source.unsplash.com/random/750x750?product=2',
        'https://source.unsplash.com/random/750x750?product=3',
        'https://source.unsplash.com/random/750x750?product=4',
        'https://source.unsplash.com/random/750x750?product=5',
      ],
      category: 'Điện thoại di động',
      createdDate: '2023-09-27',
      lastUpdatedDate: '2023-09-27',
      createdBy: {
        id: 101,
        name: 'John Doe',
        email: 'john@example.com',
      },
      updatedBy: {
        id: 102,
        name: 'Jane Smith',
        email: 'jane@example.com',
      },
      status: 'Còn hàng',
      sellerInfo: {
        name: 'Apple Inc.',
        contactEmail: 'contact@apple.com',
        contactPhone: '+1-800-123-4567',
        website: 'https://www.apple.com',
      },
    },
  ],
  reducers: {
    addProduct(state, { payload }) {
      state.push(payload);
    },
    deleteProduct(state, { payload }) {
      const index = state.findIndex((product) => product.id === payload);
      state.splice(index, 1);
    },
    updateProduct(state, { payload }) {
      const index = state.findIndex((product) => product.id === payload.id);
      state.splice(index, 1, payload);
    },
    updateProducts(state, { payload }) {
      state.push(...payload);
    },
  },
});

const { actions, reducer } = productSlice;
export const { addProduct, updateProduct, updateProducts, deleteProduct } = actions;
export default reducer;
