import classes from './Reviews.module.css'
import TextCard from '../TextCard/TextCard'
import Review from '../Review/Review'

export const Reviews = ({ reviews }) =>
  (
    <section>
      <ul className={classes.list}>
        {reviews.map(({ author, text, rating }, i) =>
          <li className={classes.item}>
            <article>
              <Review name={author}
                      text={text}
                      rating={rating}
                      key={i}
              />
            </article>
          </li>,
        )}
      </ul>
    </section>
  )
