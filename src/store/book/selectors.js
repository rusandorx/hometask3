import { selectKindById } from '../kind/selectors';
import { Statuses } from '../../data/Statuses';

const selectBookSlice = state => state.book;

const selectBooks = state => Object.values(selectBookSlice(state).entities);

const selectBookIds = state => selectBookSlice(state).ids;

const selectBooksByKind = (state, kindId) => {
  if (!kindId) {
    return [];
  }
  const selectedBooks = selectKindById(state, kindId).books;
  const allBooks = selectBookSlice(state).entities;
  return selectedBooks.map(book => allBooks[book]).filter(book => book);
};

const selectIsBooksLoading = state => selectBookSlice(state).status ===
  Statuses.inProgress;

const selectBookById = (state, bookId) => {
  return selectBookSlice(state)
    .entities[bookId];
};

const selectBooksByIds = (state, booksIds) => {
  const books = selectBookSlice(state).entities;
  return booksIds.map(id => books[id]);
};

const selectBooksReviewIds = (state, bookId) => selectBookSlice(
  state).entities[bookId].reviews;

export {
  selectBookSlice,
  selectBooks,
  selectBookIds,
  selectBooksByKind,
  selectIsBooksLoading,
  selectBookById,
  selectBooksByIds,
  selectBooksReviewIds,
};
