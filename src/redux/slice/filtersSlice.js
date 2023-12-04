import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter(state, actions) {
      state.filter = actions.payload;
    },
  },
});

export const getFilter = state => state.filters.filter;
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
