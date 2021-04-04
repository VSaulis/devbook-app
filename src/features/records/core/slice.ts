import {createSlice} from "@reduxjs/toolkit";
import {getRecordsAction} from "./actions";
import {RecordsListItem} from "../../../core/models/records";

interface State {
  isLoading: boolean;
  count: number;
  records: RecordsListItem[];
}

const initialState: State = {
  isLoading: false,
  records: [],
  count: 0,
};

const recordsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecordsAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRecordsAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.records = action.payload.result;
      state.count = action.payload.count;
    });
    builder.addCase(getRecordsAction.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {reducer} = recordsSlice;
