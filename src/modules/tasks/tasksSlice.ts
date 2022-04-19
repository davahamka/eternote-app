import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FetchStatus } from '../../utils/fetcher';
import tasksApi from './api';
import { DataTask } from './entities';

const fetchTasks = createAsyncThunk('tasks/fetchTasks', tasksApi.getAll);

export interface TasksState {
  tasks: DataTask[];
  status: FetchStatus;
}

const initialState: TasksState = {
  tasks: [],
  status: 'idle',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTasks.pending, state => {
      state.status = 'pending';
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.tasks = action.payload.data;
    });
    builder.addCase(fetchTasks.rejected, state => {
      state.status = 'failed';
    });
  },
});

export { fetchTasks };
export default tasksSlice.reducer;
