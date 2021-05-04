import httpClient from 'api/httpClient';
import { BaseResponse, ResultResponse, ListResponse } from 'api/types';
import {
  AddProjectRequest,
  EditProjectRequest,
  Project,
  ProjectsListItem
} from 'api/clients/projects/types';

const baseUrl = '/projects';

export const addProject = async (request: AddProjectRequest) => {
  return httpClient.post<AddProjectRequest, BaseResponse>(baseUrl, request);
};

export const editProject = async (request: EditProjectRequest) => {
  return httpClient.post<EditProjectRequest, BaseResponse>(baseUrl, request);
};

export const deleteProject = async (id: number) => {
  return httpClient.delete<void, BaseResponse>(`${baseUrl}/${id}`);
};

export const getProject = async (id: number) => {
  return httpClient.get<void, ResultResponse<Project>>(`${baseUrl}/${id}`);
};

export const getProjects = async () => {
  return httpClient.get<void, ListResponse<ProjectsListItem>>(baseUrl);
};
