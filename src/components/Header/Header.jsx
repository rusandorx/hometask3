import classes from './Header.module.css';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export const Header = () => (
  <header>
    <nav className={classes.header}>
      <NavLink className={classes.link} to="/">
          <h1 className={classes.name}>Магазин</h1>
      </NavLink>
      <a className={classNames(classes.link, classes.header__logo,
        'fa-solid fa-cart-shopping')}/>
    </nav>
  </header>
);
