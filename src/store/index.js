import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { bookSlice } from './book';
import { reviewSlice } from './review';
import { kindSlice } from './kind';
import { cartSlice } from './cart';

export const store = configureStore({
  reducer: combineReducers({
    kind: kindSlice.reducer,
    book: bookSlice.reducer,
    review: reviewSlice.reducer,
    cart: cartSlice.reducer
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
