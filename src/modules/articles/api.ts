import { cmsFetch } from '../../utils/fetcher';
import { ArticlesResponse } from './entities';

const articlesApi = {
  getAll: async () => {
    const response = await cmsFetch.get<ArticlesResponse>(
      'articles?populate=*',
    );
    return response.data;
  },
};

export default articlesApi;
