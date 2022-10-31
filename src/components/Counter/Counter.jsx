import { useState, memo } from 'react'
import classNames from 'classnames'
import classes from './Counter.module.css'

export const Counter = memo(() => {
    const [count, setCount] = useState(0)

    return <div className={classNames(classes.counter)}>
      <button
        className={classNames(classes.button, 'fa-solid fa-square-minus',
          { [classes.button_disabled]: count <= 0 })}
        onClick={() => setCount(prevState => --prevState)
        }
      >
      </button>
      <p className={classNames(classes.text, classes.counter__text,
        {
          [classes.text_transparent]: count === 0,
        })}>{count}</p>
      <button
        className={classNames(classes.button, 'fa-solid fa-square-plus')}
        onClick={() => setCount(prevState => ++prevState)}>
      </button>
    </div>
  },
)

