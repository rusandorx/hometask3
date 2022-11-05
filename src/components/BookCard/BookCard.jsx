import classNames from 'classnames';
import classes from './BookCard.module.css';
import { Rating } from '../Rating/Rating';
import { Counter } from '../Counter/Counter';
import { useSelector } from 'react-redux';
import { selectBookById } from '../../store/book/selectors';
import { NavLink } from 'react-router-dom';
import { useReviews } from '../../hooks/useReviews';
import { useMemo } from 'react';

export const BookCard = ({
  bookId,
  isCounterDown = false,
}) => {
  const book = useSelector(
    state => selectBookById(state, bookId));
  const { title, author, genre, cost } = book;
  const { reviews } = useReviews(bookId);
  const rating = useMemo(() => Math.round(
    (reviews.map(review => review.rating).reduce((a, b) => a + b, 0)) /
    reviews.length), [reviews]);

  return (
    <article className={classes.bookCard}>
      <div className={classes.bookCard__inner}>
        <div className={classes.bookCard__info}>
          <NavLink to={`/book/${bookId}`} className={classes.link}>
            <h3 className={classes.text}>{title}</h3>
          </NavLink>
          <div className={classes.info__block}>
            <p className={classes.text}>{author}</p>
            <p className={classes.text}>{genre}</p>
          </div>
          <Rating rating={rating}/>
          <h2 className={classes.text}>{cost} &#x20BD;</h2>
        </div>
        <div className={classNames(classes.container,
          { [classes.container_down]: isCounterDown })}>
          <Counter bookId={bookId}/>
        </div>
      </div>
    </article>
  );
};
