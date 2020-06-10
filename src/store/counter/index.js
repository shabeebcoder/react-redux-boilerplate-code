import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    getCount: state => {
      return state;
    },
    incrementCount: (state, action) => {
      state = state + 1;
      return state;
    },
    decrementCount: (state, action) => {
      state = state - 1;
      return state;
    },
  },
});

export const { getCount, incrementCount, decrementCount } = slice.actions;
export default slice.reducer;
