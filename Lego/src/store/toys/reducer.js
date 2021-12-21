import { createSlice } from '@reduxjs/toolkit'

const toysSlice = createSlice({
  name: 'toy',
  initialState: {
    currentGame: null
  },
  reducers: {
    setCurrentToy: (state, action) => {
      state.currentToy = action.payload
    },
  }
});

export const { setCurrentToy } = toysSlice.actions;
export default toysSlice.reducer;