import { baseFetch } from '../../utils/fetcher';

const authApi = {
  signIn: async () => {
    const response = await baseFetch.post('');
    return response.data;
  },
};

export default authApi;
