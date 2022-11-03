import classes from './Header.module.css';
import classNames from 'classnames';

export const Header = () => (
  <header>
    <nav className={classes.header}>
      <a className={classes.link} href="#">
        <h1 className={classes.name}>Магазин</h1>
      </a>
      <a className={classNames(classes.link, classes.header__logo,
        'fa-solid fa-cart-shopping')}/>
    </nav>
  </header>
);
