import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedKindId } from '../store/kind/selectors';
import {
  selectBooksByIds,
  selectBooksByKind,
  selectIsBooksLoading,
} from '../store/book/selectors';
import { useEffect } from 'react';
import { loadBooks } from '../store/book/loadBooks';
import { selectPurchasedBooksIds } from '../store/cart/selectors';

const useBooksBySelectedKind = () => {
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

const useBooksByCartContent = () => {
  const isLoading = useSelector(selectIsBooksLoading);
  const booksIds = useSelector(state => selectPurchasedBooksIds(state));
  const books = useSelector(state => selectBooksByIds(state, booksIds));

  return { books, isLoading };
};

export const options = {
  bySelectedKind: useBooksBySelectedKind,
  byCartContent: useBooksByCartContent,
};

export const useBooks = (option = options.bySelectedKind) => {
  return option();
};
