import classes from './PurchasesList.module.css';
import {
  selectCartSlice,
  selectPurchasedBooksIds,
} from '../../store/cart/selectors';
import { selectBooksByIds } from '../../store/book/selectors';
import { useSelector } from 'react-redux';
import React, { useMemo } from 'react';

export const PurchasesList = () => {
  const booksIds = useSelector(selectPurchasedBooksIds);
  const books = useSelector(state => selectBooksByIds(state, booksIds));
  const cartSlice = useSelector(selectCartSlice);
  const sum = useMemo(() => {
    if (!cartSlice || !books?.length) return 0;
    return books.map(book => book.cost * cartSlice[book.id])
      .reduce((a, b) => a + b);
  }, [cartSlice]);

  return (
    <div className={classes.card}>
      <div className={classes.order}>
        <h3 className={classes.card__heading}>Ваш заказ: </h3>
        {!books?.length && <p>Вы еще ничего не выбрали</p>}
        <ul className={classes.list}>
          {
            books.map(book =>
              <React.Fragment key={book.id}>
                <div className={classes.title}>{book.title}</div>
                <h4 className={classes.price}>{book.cost} &#8381; </h4>
              </React.Fragment>)
          }
        </ul>
      </div>
      {books?.length

        ? <div className={classes.card__result}>
          <h2>Итого: {sum}</h2>
          <button className={classes.button}>Купить</button>
        </div>

        : null}
    </div>
  );
};
