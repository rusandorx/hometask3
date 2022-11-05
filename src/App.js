// noinspection ES6UnusedImports

import React from 'react';
import './index.css';
import { Header } from './components/Header/Header';
// eslint-disable-next-line no-unused-vars
import { kinds } from './data/kinds';
// eslint-disable-next-line no-unused-vars
import { BooksPage } from './pages/BooksPage/BooksPage';
// eslint-disable-next-line no-unused-vars
import BookPage from './pages/BookPage/BookPage';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Header/>
       {/* <BookPage book={books[2]}/> */}
       <BooksPage />
    </Provider>
  );
};

export default App;
