import classes from './Reviews.module.css';
import Review from '../Review/Review';
import { useReviews } from '../../hooks/useReviews';

export const Reviews = ({ bookId }) => {
  const { reviews } = useReviews(bookId);

  if (!reviews?.length) {
    return null;
  }

  return (
    <section>
      <ul className={classes.list}>
        {reviews.map(({ author, text, rating }, i) =>
          <li key={i}>
            <article>
              <Review name={author}
                      text={text}
                      rating={rating}
              />
            </article>
          </li>,
        )}
      </ul>
    </section>
  );
};
