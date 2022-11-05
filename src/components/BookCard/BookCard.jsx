import classNames from 'classnames';
import classes from './BookCard.module.css';
import { Rating } from '../Rating/Rating';
import { Counter } from '../Counter/Counter';
import { useSelector } from 'react-redux';
import { selectBookById } from '../../store/book/selectors';
import { NavLink } from 'react-router-dom';

export const BookCard = ({
  bookId,
  isCounterDown = false,
}) => {
  const { title, author, genre, rating, cost } = useSelector(
    state => selectBookById(state, bookId));

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
          <Rating rating={rating}
                  all={5}
          />
          <h2 className={classes.text}>{cost} &#x20BD;</h2>
        </div>
        <div className={classNames(classes.container,
          { [classes.container_down]: isCounterDown })}>
          <Counter/>
        </div>
      </div>
    </article>
  );
};
