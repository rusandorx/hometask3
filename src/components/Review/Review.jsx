import React from 'react';
import classes from './Review.module.css';
import { Rating } from '../Rating/Rating';
import { useSelector } from 'react-redux';
import { selectReviewById } from '../../store/review/selectors';

const Review = ({ reviewId }) => {
  const review = useSelector(
    state => selectReviewById(state, reviewId));

  if (!review) {
    return null;
  }

  return (
    <article className={classes.review}>
      <div className={classes.heading}>
        <h2 className={classes.heading__text}>{review.author}</h2>
        <Rating rating={review.rating} all={5}/>
      </div>
      <p className={classes.text}>{review.text}</p>
    </article>
  );
};

export default Review;
