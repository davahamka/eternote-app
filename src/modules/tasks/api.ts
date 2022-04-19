import { cmsFetch } from '../../utils/fetcher';
import { TasksResponse } from './entities';
// import { ArticleResponse, ArticlesResponse } from './entities';

const tasksApi = {
  getAll: async (data: any, { rejectWithValue }: any) => {
    try {
      const response = await cmsFetch.get<TasksResponse>('tasks?populate=*');
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
};

export default tasksApi;
