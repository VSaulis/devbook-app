import httpClient from 'api/httpClient';
import { BaseResponse, ResultResponse } from 'api/types';
import {
  LoginRequest,
  ConfirmCodeRequest,
  TokenResponse
} from 'api/clients/auth/types';

const baseUrl = '/authentication';

export const login = async (request: LoginRequest) => {
  return httpClient.post<LoginRequest, BaseResponse>(
    `${baseUrl}/login`,
    request
  );
};

export const confirmCode = async (request: ConfirmCodeRequest) => {
  return httpClient.post<ConfirmCodeRequest, ResultResponse<TokenResponse>>(
    `${baseUrl}/confirm-code`,
    request
  );
};
