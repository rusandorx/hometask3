import { memo } from 'react';
import classNames from 'classnames';
import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectBookCount } from '../../store/cart/selectors';
import { cartSlice } from '../../store/cart';

const Counter = memo(({ bookId }) => {
  const dispatch = useDispatch();
  const count = useSelector(state => selectBookCount(state, bookId));

  return <div className={classNames(classes.counter)}>
    <button
      className={classNames(classes.button, 'fa-solid fa-square-minus',
        { [classes.button_disabled]: !count })}
      onClick={() => dispatch(cartSlice.actions.removeBook(bookId))
      }
    >
    </button>
    <p className={classNames(classes.text, classes.counter__text,
      {
        [classes.text_transparent]: count === 0,
      })}>{count || 0}</p>
    <button
      className={classNames(classes.button, 'fa-solid fa-square-plus')}
      onClick={() => dispatch(cartSlice.actions.addBook(bookId))}>
    </button>
  </div>;
});

Counter.displayName = 'Counter';

export { Counter };
