import { Statuses } from '../../data/Statuses';
import { selectBookById } from '../book/selectors';

const selectReviewSlice = state => state.review;

const selectReviews = state => Object.values(selectReviewSlice(state).entities);

const selectReviewIds = state => selectReviewSlice(state).ids;

const selectIsReviewsLoading = state => selectReviewSlice(state).status ===
  Statuses.inProgress;

const selectReviewById = (state, reviewId) => {
  return selectReviewSlice(state)
    .entities[reviewId];
};

const selectReviewsByBook = (state, bookId) => {
  if (!bookId) {
    return [];
  }
  const selectedReviews = selectBookById(state, bookId).reviews;
  const allReviews = selectReviewSlice(state).entities;
  return selectedReviews?.map(review => allReviews[review])
    .filter(review => review);
};

export {
  selectReviewSlice,
  selectReviews,
  selectReviewIds,
  selectIsReviewsLoading,
  selectReviewsByBook,
  selectReviewById,
};
