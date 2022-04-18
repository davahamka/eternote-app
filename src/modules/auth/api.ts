import { baseFetch } from '../../utils/fetcher';
import {
  CheckAuthResponse,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from './entities';

const authApi = {
  signIn: async (data: LoginRequest, { rejectWithValue }: any) => {
    try {
      const response = await baseFetch.post<LoginResponse>('auth/login', data);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
  signUp: async (data: RegisterRequest, { rejectWithValue }: any) => {
    try {
      const response = await baseFetch.post<RegisterResponse>('users', data);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
  checkAuth: async (em: any, { rejectWithValue }: any) => {
    try {
      const response = await baseFetch.get<CheckAuthResponse>('auth/check');
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
};

export default authApi;
