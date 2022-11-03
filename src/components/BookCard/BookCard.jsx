import classNames from 'classnames';
import classes from './BookCard.module.css';
import { Rating } from '../Rating/Rating';
import { Counter } from '../Counter/Counter';

export const BookCard = ({
  title,
  author,
  genre,
  rating,
  cost,
  isCounterDown,
}) =>
  (
    <article className={classes.bookCard}>
      <div className={classNames(classes.bookCard__inner)}>
        <div className={classNames(classes.bookCard__info)}>
          <h3 className={classes.text}>{title}</h3>
          <div className={classes.info__block}>
            <p className={classes.text}>{author}</p>
            <p className={classes.text}>{genre}</p>
          </div>
          <Rating rating={rating}
                  all={5}
          />
          <h2 className={classNames(classes.text)}>{cost} &#x20BD;</h2>
        </div>
        <div className={classNames(classes.container,
          { [classes.container_down]: isCounterDown })}>
          <Counter/>
        </div>
      </div>
    </article>
  );
