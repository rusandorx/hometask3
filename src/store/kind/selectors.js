import { Statuses } from '../../data/Statuses';

const selectKindSlice = state => state.kind;

const selectKinds = state => {
  return Object.values(selectKindSlice(state).entities);
};

const selectKindById = (state, id) => {
  if (!state || !id) {
    return [];
  }
  return selectKindSlice(state).entities[id];
};

const selectKindIds = state => {
  return selectKindSlice(state).ids;
};

const selectSelectedKindId = state => {
  return selectKindSlice(state).selectedKindId;
};

const selectIsKindsLoading = state => {
  return selectKindSlice(state).status === Statuses.inProgress;
};

export {
  selectKindSlice,
  selectKinds,
  selectSelectedKindId,
  selectKindIds,
  selectKindById,
  selectIsKindsLoading,
};
