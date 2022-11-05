import classes from './BookList.module.css';
import { BookCard } from '../BookCard/BookCard';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useBooks } from '../../hooks';

export const BooksList = () => {
  const books = useBooks();

  if (!books?.length) {
    return <p>Загрузка</p>;
  }

  return (
    <ul className={classNames(classes.list)}>
      {books
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
