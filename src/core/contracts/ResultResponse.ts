import {BaseResponse} from "core/contracts/BaseResponse";

export interface ResultResponse<T> extends BaseResponse {
  result: T;
}
