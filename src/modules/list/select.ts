import { IContract, getContractList } from 'services/contract';
import { RootState } from 'modules/store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const namespace = 'list/select';

interface IInitialState {
  loading: boolean;
  current: number;
  pageSize: number;
  total: number;
  contractList: IContract[];
}

const initialState: IInitialState = {
  loading: true,
  current: 1,
  pageSize: 10,
  total: 0,
  contractList: [],
};

export const getList = createAsyncThunk(
  `${namespace}/getSelectList`,
  async (params: { pageSize: number; current: number }) => {
    const result = await getContractList(params);
    return {
      list: result.list,
      total: result.total,
      pageSize: params.pageSize,
      current: params.current,
    };
  },
);

// 创建一个名为 listSelectSlice 的slice
const listSelectSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    clearPageState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.loading = false;
        state.contractList = action.payload?.list;
        state.total = action.payload?.total;
        state.current = action.payload?.current;
        state.pageSize = action.payload?.pageSize;
      })
      .addCase(getList.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearPageState } = listSelectSlice.actions;

export const selectListSelect = (state: RootState) => state.listSelect;

export default listSelectSlice.reducer;
