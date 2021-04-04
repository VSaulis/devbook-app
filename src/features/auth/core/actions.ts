import {createAsyncThunk} from "@reduxjs/toolkit";
import {ConfirmCodeRequest, LoginRequest} from "core/contracts/auth";
import {AuthClient} from "api/clients";
import {LoggedUser} from "core/models/auth";

export const loginAction = createAsyncThunk<void, LoginRequest>(
  'login',
  async (request: LoginRequest) => {
    await AuthClient.login(request);
  }
);

export const confirmCodeAction = createAsyncThunk<LoggedUser, ConfirmCodeRequest>(
  'resetPassword',
  async (request: ConfirmCodeRequest) => {
    const response = await AuthClient.confirmCode(request);
    return response.result;
  }
);
