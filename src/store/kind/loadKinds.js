import { selectKinds } from './selectors';
import { kindSlice } from './index';
import { prepareData } from '../utils';

export const loadKinds = (dispatch, getState) => {
  if (selectKinds(getState())?.length) {
    return;
  }
  dispatch(kindSlice.actions.startLoading());
  fetch('http://localhost:3030/api/kinds')
    .then(res => res.json())
    .then(kinds => {
      dispatch(kindSlice.actions.successLoading(prepareData(kinds)));
    })
    .catch(() => dispatch(kindSlice.actions.failedLoading()));
};
