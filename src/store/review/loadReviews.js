// NOT READY YET

// import { reviewSlice } from './index';
// import { prepareData } from '../utils';
//
// export const loadBooks = (bookId) => (dispatch, getState) => {
//   // if (selectBooks(getState())?.length) {
//   //   return;
//   // }
//   dispatch(reviewSlice.actions.startLoading());
//   fetch(`http://localhost:3030/api/reviews?bookId=${bookId}`)
//     .then(res => res.json())
//     .then(books => {
//       dispatch(reviewSlice.actions.successLoading(prepareData(books)));
//     })
//     .catch(() => dispatch(reviewSlice.actions.failedLoading()));
// };
