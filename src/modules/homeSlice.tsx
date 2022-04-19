import { createSlice } from '@reduxjs/toolkit';
import { SheetManager } from 'react-native-actions-sheet';

export interface HomeState {}

const initialState: HomeState = {};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    openTask: (state, action) => {
      SheetManager.show('task_info', action.payload);
      console.log(action);
    },
  },
});

export const { openTask } = homeSlice.actions;
export default homeSlice.reducer;
