import classes from './Reviews.module.css';
import Review from '../Review/Review';
import { useSelector } from 'react-redux';
import { selectBooksReviewIds } from '../../store/book/selectors';

export const Reviews = ({ bookId }) => {
  const reviewIds = useSelector(state => selectBooksReviewIds(state, bookId));

  if (!reviewIds?.length) {
    return null;
  }

  return (
    <section>
      <ul className={classes.list}>
        {reviewIds.map(reviewId =>
          <li key={reviewId}>
            <article>
              <Review reviewId={reviewId}/>
            </article>
          </li>,
        )}
      </ul>
    </section>
  );
};
