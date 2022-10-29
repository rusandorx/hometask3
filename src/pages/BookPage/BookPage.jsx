import React from 'react'
import { Header } from '../../components/Header/Header'
import classNames from 'classnames'
import classes from './BookPage.module.css'
import { BookCard } from '../../components/BookCard/BookCard'
import TextCard from '../../components/TextCard/TextCard'
import { Reviews } from '../../components/Reviews/Reviews'

const BookPage = ({ book }) => {
  const { author, genre, description, cost, rating, reviews, title } = book

  return (
    <>
      <Header/>
      <div className={classNames(classes.layout)}>
        <main className={classes.info}>
          <BookCard title={title}
                    author={author}
                    genre={genre}
                    cost={cost}
                    rating={rating}
                    isCounterDown={true}
          />
          <TextCard heading={'Аннотация'}
            text={description}/>
        </main>
        <Reviews reviews={reviews}/>
      </div>
    </>
  )
}

export default BookPage
