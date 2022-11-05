import { selectKindById } from '../kind/selectors';

const selectBookSlice = state => state.book;

const selectBooks = state => {
  return Object.values(selectBookSlice(state).entities);
};

const selectBookIds = state => selectBookSlice(state).ids;

const selectBooksByKind = (state, kindId) => {
  if (!kindId) {
    return [];
  }
  const selectedBooks = selectKindById(state, kindId).books;
  const allBooks = selectBookSlice(state).entities;
  return selectedBooks.map(book => allBooks[book]).filter(book => book);
};

export { selectBookSlice, selectBooks, selectBookIds, selectBooksByKind };
