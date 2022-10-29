import classes from './KindList.module.css'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

const getBooks = async kind => {
  const response = await fetch(
    'https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyC_HnQkqo3CZcCGqiUQRaSVFaNTtzqdOGc')
  return await response.json()
}

export const KindList = ({ kinds, initKind, childToParent }) => {
  const [currentKind, setCurrentKind] = useState(initKind)

  useEffect(() => childToParent(currentKind), [currentKind])

  return (
    <ul className={classNames(classes.list)}>
      {
        kinds.map((kind, i) =>
          <li key={i} className={classNames(classes.item)}>
            <button
              className={classNames(classes.button,
                { [classes.button_current]: currentKind === kind })}
              onClick={() => setCurrentKind(kind)}>
              {kind}
            </button>
          </li>)
      }
    </ul>
  )
}
