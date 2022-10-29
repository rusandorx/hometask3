import React from 'react'
import classes from './TextCard.module.css'

const TextCard = ({ heading, text }) => {
  return (
    <article className={classes.annotation}>
      <h2 className={classes.heading}>{heading}</h2>
      <p className={classes.text}>{text}</p>
    </article>
  )
}

export default TextCard
