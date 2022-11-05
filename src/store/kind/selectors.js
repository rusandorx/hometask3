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

export {
  selectKindSlice,
  selectKinds,
  selectSelectedKindId,
  selectKindIds,
  selectKindById,
};
