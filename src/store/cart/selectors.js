const selectCartSlice = state => state.cart;

const selectBookCount = (state, bookId) => selectCartSlice(state)[bookId];

const selectPurchasedBooksIds = state => Object.keys(selectCartSlice(state));

export {
  selectCartSlice,
  selectBookCount,
  selectPurchasedBooksIds,
};
