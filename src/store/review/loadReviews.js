import { reviewSlice } from './index';
import { prepareData } from '../utils';

export const loadReviews = bookId => dispatch => {
  dispatch(reviewSlice.actions.startLoading());
  fetch(`http://localhost:3030/api/reviews?bookId=${bookId}`)
    .then(res => res.json())
    .then(reviews => {
      dispatch(reviewSlice.actions.successLoading(prepareData(reviews)));
    })
    .catch(() => dispatch(reviewSlice.actions.failedLoading()));
};
