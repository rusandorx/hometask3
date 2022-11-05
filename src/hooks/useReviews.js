import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectIsReviewsLoading,
  selectReviewsByBook,
} from '../store/review/selectors';
import { loadReviews } from '../store/review/loadReviews';

export const useReviews = bookId => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsReviewsLoading);
  const reviews = useSelector(state => selectReviewsByBook(state, bookId));

  useEffect(() => {
    dispatch(loadReviews(bookId));
  }, []);
  return { reviews, isLoading };
};
