import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseFetch, FetchStatus } from '../../utils/fetcher';
import authApi from './api';
import { User } from './entities';
import { HeadersDefaults } from 'axios';

interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

const loginAuth = createAsyncThunk('auth/signIn', authApi.signIn);
const registerAuth = createAsyncThunk('auth/signUp', authApi.signUp);
const checkAuth = createAsyncThunk('auth/check', authApi.checkAuth);
const getToken = createAsyncThunk('auth/addToken', async () => {
  const token = await AsyncStorage.getItem('token');
  return token;
});

export interface AuthState {
  token: string | null;
  status: FetchStatus;
  error: any;
  user: User | null;
}

const initialState: AuthState = {
  token: null,
  status: 'idle',
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.token = null;
      AsyncStorage.removeItem('token');
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginAuth.pending, state => {
        state.status = 'pending';
      })
      .addCase(loginAuth.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        AsyncStorage.setItem('token', action.payload.token);

        baseFetch.defaults.headers = {
          Authorization: `Bearer ${action.payload.token}`,
        } as CommonHeaderProperties;
      })
      .addCase(loginAuth.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      .addCase(registerAuth.pending, state => {
        state.status = 'pending';
      })
      .addCase(registerAuth.fulfilled, state => {
        state.status = 'succeeded';
      })
      .addCase(registerAuth.rejected, state => {
        state.status = 'failed';
      })

      .addCase(checkAuth.pending, state => {
        state.status = 'pending';
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.data;
      })
      .addCase(checkAuth.rejected, state => {
        state.status = 'failed';
      });
  },
});

export { loginAuth, registerAuth, getToken, checkAuth };
export default authSlice.reducer;
