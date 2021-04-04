import httpClient from "api/httpClient";
import {BaseResponse, ResultResponse} from "core/contracts";
import {LoginRequest, ConfirmCodeRequest} from "core/contracts/auth";
import {LoggedUser} from "core/models/auth";

const baseUrl = '/auth';

export const login = async (request: LoginRequest) => {
  return httpClient.post<LoginRequest, BaseResponse>(baseUrl, request);
};

export const confirmCode = async (request: ConfirmCodeRequest) => {
  return httpClient.post<ConfirmCodeRequest, ResultResponse<LoggedUser>>(baseUrl, request);
};
