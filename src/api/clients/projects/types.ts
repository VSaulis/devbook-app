import { BaseModel } from 'api/types';

export interface AddProjectRequest {
  name: string;
  rate: number;
}

export interface EditProjectRequest {
  name: string;
  rate: number;
}

export interface Project extends BaseModel {
  name: string;
  rate: number;
}

export interface ProjectsListItem extends BaseModel {
  name: string;
  rate: number;
}
