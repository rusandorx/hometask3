import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsKindsLoading,
  selectKinds,
  selectSelectedKindId,
} from '../store/kind/selectors';
import { changeSelectedKindId } from '../store/kind';
import { useEffect } from 'react';
import { loadKinds } from '../store/kind/loadKinds';

export const useKinds = () => {
  const dispatch = useDispatch();
  const kinds = useSelector(selectKinds);
  const selectedKindId = useSelector(selectSelectedKindId);
  const isLoading = useSelector(selectIsKindsLoading);
  const setSelectedKindId = id => dispatch(changeSelectedKindId(id));

  useEffect(() => dispatch(loadKinds), []);
  return { kinds, selectedKindId, isLoading, setSelectedKindId };
};
