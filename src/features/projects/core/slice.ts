import { createSlice } from '@reduxjs/toolkit';
import { getProjectsAction } from './actions';
import { ProjectsListItem } from 'api/clients/projects/types';

interface State {
  isLoading: boolean;
  count: number;
  projects: ProjectsListItem[];
}

const initialState: State = {
  isLoading: false,
  projects: [],
  count: 0
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProjectsAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProjectsAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.projects = action.payload.result;
      state.count = action.payload.count;
    });
    builder.addCase(getProjectsAction.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export const { reducer } = projectsSlice;
