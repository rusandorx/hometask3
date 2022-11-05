import classes from './BooksPage.module.css';
import classNames from 'classnames';
import { BooksList } from '../../components/BooksList/BooksList';
import { KindList } from '../../components/KindList/KindList';

export const BooksPage = () => {
  return (
    <div className={classNames(classes.layout)}>
      <KindList/>
      <main>
        <BooksList/>
      </main>
    </div>
  );
};
