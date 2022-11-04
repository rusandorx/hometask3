// noinspection ES6UnusedImports

import React from 'react';
import './index.css';
import { Header } from './components/Header/Header';
import { books } from './data/books';
// eslint-disable-next-line no-unused-vars
import { kinds } from './data/kinds';
// eslint-disable-next-line no-unused-vars
import { BooksPage } from './pages/BooksPage/BooksPage';
// eslint-disable-next-line no-unused-vars
import BookPage from './pages/BookPage/BookPage';

const App = () => {
  return (
    <>
      <Header/>
       {/* Разкомментировать чтобы открыть вторую страницу */}
       <BookPage book={books[2]}/>
      {/* <BooksPage kinds={kinds} */}
      {/*           books={books} */}
      {/* /> */}
    </>
  );
};

export default App;
