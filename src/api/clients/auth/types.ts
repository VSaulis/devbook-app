export interface ConfirmCodeRequest {
  phone: string;
  code: number;
}

export interface LoginRequest {
  phone: string;
}

export interface TokenResponse {
  token: string;
  refreshToken: string;
}
