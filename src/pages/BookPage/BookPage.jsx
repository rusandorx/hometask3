import React from 'react';
import classNames from 'classnames';
import classes from './BookPage.module.css';
import { BookCard } from '../../components/BookCard/BookCard';
import TextCard from '../../components/TextCard/TextCard';
import { Reviews } from '../../components/Reviews/Reviews';
import { useParams } from 'react-router-dom';
import { useBook } from '../../hooks/useBook';
import Spinner from '../../components/Spinner/Spinner';

const BookPage = () => {
  const { bookId } = useParams();
  const { book, isLoading } = useBook(bookId);

  if (isLoading || !book) {
    return <Spinner/>;
  }

  return (
    <div className={classNames(classes.layout)}>
      <main className={classes.info}>
        <BookCard bookId={bookId} isCounterDown={true}/>
        <TextCard heading={'Аннотация'}
                  text={book.description}/>
      </main>
      <Reviews bookId={bookId}/>
    </div>
  );
};

// noinspection JSUnusedGlobalSymbols
export default BookPage;
