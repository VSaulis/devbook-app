import {createAsyncThunk} from "@reduxjs/toolkit";
import {RecordsClient} from "api/clients";
import {ListResponse} from "core/contracts";
import {RecordsListItem} from "core/models/records";

export const getRecordsAction = createAsyncThunk<ListResponse<RecordsListItem>, void>(
  'getRecords',
  async () => {
    return await RecordsClient.getRecords();
  }
);
