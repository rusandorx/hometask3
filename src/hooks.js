import { useEffect } from 'react';
import { loadBooks } from './store/book/loadBooks';
import { selectBooksByKind } from './store/book/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedKindId } from './store/kind/selectors';

export const useBooks = () => {
  const dispatch = useDispatch();
  const selectedKindId = useSelector(selectSelectedKindId);
  const books = useSelector(
    (state) => selectBooksByKind(state, selectedKindId));

  useEffect(() => {
    if (selectedKindId !== null) {
      dispatch(loadBooks(selectedKindId));
    }
  }, [selectedKindId]);
  return books;
};
