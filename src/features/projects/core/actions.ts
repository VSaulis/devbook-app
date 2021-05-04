import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProjectsClient } from 'api/clients';
import { ListResponse } from 'api/types';
import { ProjectsListItem } from 'api/clients/projects/types';

export const getProjectsAction = createAsyncThunk<
  ListResponse<ProjectsListItem>,
  void
>('getProjects', async () => {
  return await ProjectsClient.getProjects();
});
