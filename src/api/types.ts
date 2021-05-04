export interface BaseResponse {}

export interface ListResponse<T> extends ResultResponse<T[]> {
  count: number;
}

export interface ResultResponse<T> extends BaseResponse {
  result: T;
}

export interface BaseModel {
  id: number;
  created: string;
  updated?: string;
}
