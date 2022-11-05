// noinspection ES6UnusedImports

import React from 'react';
import './index.css';
// eslint-disable-next-line no-unused-vars
import { kinds } from './data/kinds';
// eslint-disable-next-line no-unused-vars
import { BooksPage } from './pages/BooksPage/BooksPage';
// eslint-disable-next-line no-unused-vars
import BookPage from './pages/BookPage/BookPage';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<BooksPage/>}/>
              <Route path="book/:bookId" element={<BookPage/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
