import httpClient from "api/httpClient";
import {BaseResponse, ResultResponse, ListResponse} from "core/contracts";
import {AddRecordRequest, EditRecordRequest} from "core/contracts/records";
import {RecordsListItem, Record} from "core/models/records";

const baseUrl = '/restaurants';

export const addRecord = async (request: AddRecordRequest) => {
  return httpClient.post<AddRecordRequest, BaseResponse>(baseUrl, request);
};

export const editRecord = async (request: EditRecordRequest) => {
  return httpClient.post<EditRecordRequest, BaseResponse>(baseUrl, request);
};

export const deleteRecord = async (id: number) => {
  return httpClient.delete<void, BaseResponse>(`${baseUrl}/${id}`);
};

export const getRecord = async (id: number) => {
  return httpClient.get<void, ResultResponse<Record>>(`${baseUrl}/${id}`);
};

export const getRecords = async () => {
  return httpClient.get<void, ListResponse<RecordsListItem>>(baseUrl);
};
