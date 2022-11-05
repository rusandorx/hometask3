import classes from './BookList.module.css';
import { BookCard } from '../BookCard/BookCard';
import classNames from 'classnames';
import Spinner from '../Spinner/Spinner';
import { options, useBooks } from '../../hooks/useBooks';

export const BooksList = ({ option = options.bySelectedKind }) => {
  const { books, isLoading } = useBooks(option);

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <ul className={classNames(classes.list)}>
      {books?.length
        ? books
          .map(({ id: bookId }) => (
            <li key={bookId}
                className={classNames(classes.item)}
            >
              <BookCard bookId={bookId}/>
            </li>
          ))
        : null}
    </ul>
  );
};
