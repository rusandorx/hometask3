import { bookSlice } from './index';
import { prepareData } from '../utils';
import { selectBookById, selectBookIds } from './selectors';
import { selectKindById } from '../kind/selectors';

export const loadBooks = kindId => (dispatch, getState) => {
  const bookIds = selectBookIds(getState());
  if (selectKindById(getState(), kindId)
    ?.books
    .every(id => bookIds.includes(id))) {
    return;
  }

  dispatch(bookSlice.actions.startLoading());
  fetch(`http://localhost:3030/api/books?kindId=${kindId}`)
    .then(res => res.json())
    .then(books => {
      dispatch(bookSlice.actions.successLoading(prepareData(books)));
    })
    .catch(() => dispatch(bookSlice.actions.failedLoading()));
};

export const loadBookById = bookId => (dispatch, getState) => {
  if (selectBookById(getState(), bookId)) {
    return;
  }

  dispatch(bookSlice.actions.startLoading());
  fetch(`http://localhost:3030/api/books?bookId=${bookId}`)
    .then(res => res.json())
    .then(book => {
      dispatch(
        bookSlice.actions.successLoading(
          { entities: { [book.id]: book }, ids: [book.id] }));
    })
    .catch(() => dispatch(bookSlice.actions.failedLoading()));
};
