import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthClient } from 'api/clients';
import {
  ConfirmCodeRequest,
  LoginRequest,
  TokenResponse
} from 'api/clients/auth/types';

export const loginAction = createAsyncThunk<void, LoginRequest>(
  'login',
  async (request: LoginRequest) => {
    await AuthClient.login(request);
  }
);

export const confirmCodeAction = createAsyncThunk<
  TokenResponse,
  ConfirmCodeRequest
>('confirmCode', async (request: ConfirmCodeRequest) => {
  const response = await AuthClient.confirmCode(request);
  return response.result;
});
