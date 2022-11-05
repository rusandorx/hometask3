import classNames from 'classnames';
import classes from './CartIcon.module.css';
import { memo } from 'react';

const CartIcon = memo(({ count }) => (
  <div className={classes.cart}>
    <i className={classNames(classes.logo,
      'fa-solid fa-cart-shopping')}></i>
    {count !== 0 &&
      <div className={classes.count}>
        {count}
      </div>}
  </div>));

CartIcon.displayName = 'CartIcon';
export { CartIcon };
