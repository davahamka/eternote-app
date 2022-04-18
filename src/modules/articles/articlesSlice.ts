import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FetchStatus } from '../../utils/fetcher';
import articlesApi from './api';
import { DataArticle } from './entities';

const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  articlesApi.getAll,
);

export interface ArticlesState {
  articles: DataArticle[];
  status: FetchStatus;
}

const initialState: ArticlesState = {
  articles: [],
  status: 'idle',
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchArticles.pending, state => {
      state.status = 'pending';
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.articles = action.payload.data;
    });
    builder.addCase(fetchArticles.rejected, state => {
      state.status = 'failed';
    });
  },
});

export { fetchArticles };
export default articlesSlice.reducer;
