import { BaseModel } from 'api/types';

export interface AddRecordRequest {
  description: string;
  projectId: number;
  hours: number;
  date: string;
}

export interface EditRecordRequest {
  description: string;
  projectId: number;
  hours: number;
  date: string;
}

export interface Record extends BaseModel {
  description: string;
  projectId: number;
  hours: number;
  date: string;
}

export interface RecordsListItem extends BaseModel {
  description: string;
  projectId: number;
  hours: number;
  date: string;
}
