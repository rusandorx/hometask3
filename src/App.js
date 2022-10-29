import React from 'react'
import './index.css'
import BookPage from './pages/BookPage/BookPage'
import { books } from './data/books'

const App = () => {
  return (
    // Разкомментировать чтобы открыть вторую страницу
    <BookPage book={books[0]}/>
    // <BooksPage kinds={kinds}
    //           books={books}
    // />
  )
}

export default App
