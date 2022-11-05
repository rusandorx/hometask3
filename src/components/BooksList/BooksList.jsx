import classes from './BookList.module.css';
import { BookCard } from '../BookCard/BookCard';
import classNames from 'classnames';
import { useBooks } from '../../hooks';
import Spinner from '../Spinner/Spinner';

export const BooksList = () => {
  const { books, isLoading } = useBooks();

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <ul className={classNames(classes.list)}>
      {books?.length && books
        .map(book => (
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
  );
};
