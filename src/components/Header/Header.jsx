import classes from './Header.module.css';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartSlice } from '../../store/cart/selectors';
import { CartIcon } from '../CartIcon/CartIcon';

export function Header () {
  const count = Object.values(useSelector(selectCartSlice))
    .reduce((a, b) => a + b, 0);

  return (
    <header>
      <nav className={classes.header}>
        <NavLink className={classes.link} to="/">
          <h1 className={classes.name}>Магазин</h1>
        </NavLink>
        <NavLink className={classNames(classes.link, classes.cart)} to="/cart">
          <CartIcon count={count}/>
        </NavLink>
      </nav>
    </header>
  );
}
