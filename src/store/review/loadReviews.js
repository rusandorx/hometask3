import { bookSlice, reviewSlice } from './index';
import { prepareData } from '../utils';
import { selectBooks } from './selectors';

export const loadBooks = (bookId) => (dispatch, getState) => {
  if (selectBooks(getState())?.length) {
    return;
  }
  dispatch(reviewSlice.actions.startLoading());
  fetch(`http://localhost:3030/api/reviews?bookId=${bookId}`)
    .then(res => res.json())
    .then(books => {
      dispatch(reviewSlice.actions.successLoading(prepareData(books)));
    })
    .catch(() => dispatch(reviewSlice.actions.failedLoading()));
};
