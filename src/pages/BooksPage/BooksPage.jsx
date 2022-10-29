import { Header } from '../../components/Header/Header'
import classes from './BooksPage.module.css'
import classNames from 'classnames'
import { KindList } from '../../components/KindList/KindList'
import { BooksList } from '../../components/BooksList/BooksList'
import { useEffect, useState } from 'react'

export const BooksPage = ({ books, kinds }) => {
  const [kind, setKind] = useState(kinds[0] ?? null)

  const childToParent = kind => setKind(kind)

  return (
    <>
      <Header/>
      <div className={classNames(classes.layout)}>
        <KindList kinds={kinds} initKind={kind} childToParent={childToParent}/>
        <main className={classNames(classes.bookList)}>
          <BooksList books={books} kind={kind}/>
        </main>
      </div>
    </>
  )
}
