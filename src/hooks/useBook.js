import { useDispatch, useSelector } from 'react-redux';
import { selectBookById, selectIsBooksLoading } from '../store/book/selectors';
import { useEffect } from 'react';
import { loadBookById } from '../store/book/loadBooks';

export const useBook = bookId => {
  const dispatch = useDispatch();
  const book = useSelector(state => selectBookById(state, bookId));
  const isLoading = useSelector(selectIsBooksLoading);

  useEffect(() => {
    dispatch(loadBookById(bookId));
  }, []);
  return { isLoading, book };
};
