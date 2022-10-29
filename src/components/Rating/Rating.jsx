import classes from './Rating.module.css'
import classNames from 'classnames'

export const Rating = ({ rating, all }) => {
  const starsClasses = Array(all)
    .fill('fa-regular fa-star')
    .fill('fa-solid fa-star', 0, rating)

  return (
    <div className={classes.stars}>
      {starsClasses.map((cl, i) =>
        <i className={classNames(cl, classes.star)} key={i}></i>,
      )}
    </div>
  )
}

