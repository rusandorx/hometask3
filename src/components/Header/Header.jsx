import classes from './Header.module.css'
import classNames from 'classnames'

export const Header = () => (
  <header>
    <nav className={classNames(classes.header)}>
      <a className={classNames(classes.link)} href='#'>
        <h1 className={classNames(classes.name,
          classes.header__name)}>Магазин</h1>
      </a>
      <a className={classNames(classes.link, classes.header__logo, 'fa-solid fa-cart-shopping')}/>
    </nav>
  </header>
)
