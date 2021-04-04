import {ResultResponse} from "core/contracts/ResultResponse";

export interface ListResponse<T> extends ResultResponse<T[]> {
  count: number;
}
