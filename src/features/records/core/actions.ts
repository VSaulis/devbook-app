import { createAsyncThunk } from '@reduxjs/toolkit';
import { RecordsClient } from 'api/clients';
import { ListResponse } from 'api/types';
import { RecordsListItem } from 'api/clients/records/types';

export const getRecordsAction = createAsyncThunk<
  ListResponse<RecordsListItem>,
  void
>('getRecords', async () => {
  return await RecordsClient.getRecords();
});
