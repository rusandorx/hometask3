import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'slice',
  initialState: {},
  reducers: {
    addBook: (state, action) => {
      state[action.payload] = (state[action.payload] || 0) + 1;
    },
    removeBook: (state, action) => {
      state[action.payload] = state[action.payload] - 1;
      if (state[action.payload] <= 0) {
        delete state[action.payload];
      }
    },
  },
});
