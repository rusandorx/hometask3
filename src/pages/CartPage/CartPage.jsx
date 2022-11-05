import React from 'react';
import classes from './CartPage.module.css';
import { BooksList } from '../../components/BooksList/BooksList';
import { PurchasesList } from '../../components/PurchasesList/PurchasesList';
import { options } from '../../hooks/useBooks';

const CartPage = () => {
  return (
    <div className={classes.layout}>
      <PurchasesList/>
      <main>
        <BooksList option={options.byCartContent}/>
      </main>
    </div>
  );
};

export default CartPage;
