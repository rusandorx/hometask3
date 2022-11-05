import { createSlice } from '@reduxjs/toolkit';
import { Statuses } from '../../data/Statuses';

const initialState = {
  entities: {},
  status: Statuses.idle,
  ids: [],
  selectedKindId: null,
};

export const kindSlice = createSlice({
  name: 'kind',
  initialState,
  reducers: {
    startLoading: state => {
      state.status = Statuses.inProgress;
      state.entities = {};
      state.ids = [];
      state.selectedKindId = null;
    },
    successLoading: (state, action) => {
      state.status = Statuses.success;
      state.entities = action.payload.entities;
      state.ids = action.payload.ids;
      state.selectedKindId = action.payload.ids[0] ?? null;
    },
    failedLoading: state => {
      state.status = Statuses.failed;
      state.entities = {};
      state.ids = [];
      state.selectedKindId = null;
    },
    changeSelectedKindId: (state, action) => {
      if (state.selectedKindId === action.payload) {
        return;
      }
      state.selectedKindId = action.payload;
    },
  },
});

export const { changeSelectedKindId } = kindSlice.actions;
