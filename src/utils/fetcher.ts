import axios from 'axios';
import { BASE_API, CMS_API, ML_API } from './constants';

export const cmsFetch = axios.create({
  baseURL: CMS_API,
});

export const baseFetch = axios.create({
  baseURL: BASE_API,
});

export const mlFetch = axios.create({
  baseURL: ML_API,
});

// baseFetch.interceptors.request.use(config => {
//   // config.headers.authorization = store.getState().auth.token as string;
// });

export type FetchStatus = 'idle' | 'pending' | 'succeeded' | 'failed';
