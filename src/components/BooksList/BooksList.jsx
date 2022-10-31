import classes from './BookList.module.css'
import { BookCard } from '../BookCard/BookCard'
import classNames from 'classnames'

export const BooksList = ({ books, kind }) =>
  (
    <ul className={classNames(classes.list)}>
      {books.filter(book => book.kind === kind).map(book => (
        <li key={book.id}
            className={classNames(classes.item)}
        >
          <BookCard title={book.title}
                    author={book.author}
                    genre={book.genre}
                    rating={book.rating}
                    cost={book.cost}
          />
        </li>
      ))}
    </ul>
  )
