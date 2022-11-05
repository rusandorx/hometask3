import classes from './KindList.module.css';
import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadKinds } from '../../store/kind/loadKinds';
import { selectKinds, selectSelectedKindId } from '../../store/kind/selectors';
import { changeSelectedKindId } from '../../store/kind';

export const KindList = () => {
  const dispatch = useDispatch();
  const kinds = useSelector(selectKinds);
  const selectedKindId = useSelector(selectSelectedKindId);

  useEffect(() => dispatch(loadKinds), []);

  if (!kinds?.length) {
    return <p>Загрузка</p>;
  }

  return (
    <ul className={classNames(classes.list)}>
      {
        kinds.map((kind, i) =>
          <li key={kind.id} className={classNames(classes.item)}>
            <button
              className={classNames(classes.button,
                { [classes.button_current]: selectedKindId === kind.id })}
              onClick={() => dispatch(changeSelectedKindId(kind.id))}>
              {kind.name}
            </button>
          </li>)
      }
    </ul>
  );
};
