import classes from './KindList.module.css';
import classNames from 'classnames';
import { useKinds } from '../../hooks/useKinds';

export const KindList = () => {
  const { kinds, selectedKindId, setSelectedKindId, isLoading } = useKinds();

  if (isLoading || !kinds?.length) {
    return null;
  }

  return (
    <ul className={classNames(classes.list)}>
      {
        kinds.map(kind =>
          <li key={kind.id} className={classNames(classes.item)}>
            <button
              className={classNames(classes.button,
                { [classes.button_current]: selectedKindId === kind.id })}
              onClick={() => setSelectedKindId(kind.id)}>
              {kind.name}
            </button>
          </li>)
      }
    </ul>
  );
};
