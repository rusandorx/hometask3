import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedKindId } from '../store/kind/selectors';
import {
  selectBooksByKind,
  selectIsBooksLoading,
} from '../store/book/selectors';
import { useEffect } from 'react';
import { loadBooks } from '../store/book/loadBooks';

export const useBooks = () => {
  const dispatch = useDispatch();
  const selectedKindId = useSelector(selectSelectedKindId);
  const isLoading = useSelector(selectIsBooksLoading);
  const books = useSelector(
    (state) => selectBooksByKind(state, selectedKindId));

  useEffect(() => {
    if (selectedKindId !== null) {
      dispatch(loadBooks(selectedKindId));
    }
  }, [selectedKindId]);
  return { books, isLoading };
};
