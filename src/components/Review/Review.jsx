import React from 'react'
import classes from './Review.module.css'
import { Rating } from '../Rating/Rating'

const Review = ({ name, rating, text }) =>
  (
    <article className={classes.review}>
      <div className={classes.heading}>
        <h2 className={classes.heading__text}>{name}</h2>
        <Rating rating={rating} all={5}/>
      </div>
      <p className={classes.text}>{text}</p>
    </article>
  )

export default Review
