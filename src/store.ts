import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './modules/articles/articlesSlice';
import authReducer from './modules/auth/authSlice';
import taskReducer from './modules/tasks/tasksSlice';
import homeReducer from './modules/homeSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    auth: authReducer,
    task: taskReducer,
    home: homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
