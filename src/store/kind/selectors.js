import { Statuses } from '../../data/Statuses';

const selectKindSlice = state => state.kind;

const selectKinds = state => Object.values(selectKindSlice(state).entities);

const selectKindById = (state, id) => {
  if (!state || !id) {
    return [];
  }
  return selectKindSlice(state).entities[id];
};

const selectKindIds = state => selectKindSlice(state).ids;

const selectSelectedKindId = state => selectKindSlice(state).selectedKindId;

const selectIsKindsLoading = state => selectKindSlice(state).status ===
  Statuses.inProgress;

export {
  selectKindSlice,
  selectKinds,
  selectSelectedKindId,
  selectKindIds,
  selectKindById,
  selectIsKindsLoading,
};
