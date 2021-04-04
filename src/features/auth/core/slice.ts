import {createSlice} from "@reduxjs/toolkit";
import {confirmCodeAction, loginAction} from "./actions";

interface State {
  isLoading: boolean;
  isLogged: boolean
  token: string | null;
  refreshToken: string | null;
}

const initialState: State = {
  isLoading: false,
  isLogged: false,
  token: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // confirm code
    builder.addCase(confirmCodeAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(confirmCodeAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLogged = true;
      state.refreshToken = action.payload.refreshToken;
      state.token = action.payload.token;
    });
    builder.addCase(confirmCodeAction.rejected, (state) => {
      state.isLoading = false;
    });

    // login
    builder.addCase(loginAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginAction.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(loginAction.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {reducer} = authSlice;
