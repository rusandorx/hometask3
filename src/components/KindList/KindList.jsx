import classes from './KindList.module.css';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export const KindList = ({ kinds, initKind, childToParent }) => {
  const [currentKind, setCurrentKind] = useState(initKind);

  useEffect(() => childToParent(currentKind), [currentKind]);

  return (
    <ul className={classNames(classes.list)}>
      {
        kinds.map((kind, i) =>
          <li key={i} className={classNames(classes.item)}>
            <button
              className={classNames(classes.button,
                { [classes.button_current]: currentKind === kind })}
              onClick={() => setCurrentKind(kind)}>
              {kind}
            </button>
          </li>)
      }
    </ul>
  );
};
