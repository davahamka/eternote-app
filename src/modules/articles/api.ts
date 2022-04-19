import { cmsFetch } from '../../utils/fetcher';
import { ArticleResponse, ArticlesResponse } from './entities';

const articlesApi = {
  getAll: async () => {
    const response = await cmsFetch.get<ArticlesResponse>(
      'articles?populate=*',
    );
    return response.data;
  },
  getById: async (id: string) => {
    const response = await cmsFetch.get<ArticleResponse>(
      `articles/${id}?populate=*`,
    );
    return response.data;
  },
};

export default articlesApi;
