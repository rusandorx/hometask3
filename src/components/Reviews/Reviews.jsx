import classes from './Reviews.module.css';
import Review from '../Review/Review';

export const Reviews = ({ reviews }) => {
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
