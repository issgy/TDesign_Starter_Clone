import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'modules/store';
import { IContract, getContractList } from 'services/contract';

const namespace = 'list/base';

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

// 定义一个异步thunk，简化在redux中处理异步操作的过程
export const getList = createAsyncThunk(
  `${namespace}/getList`,
  async (params: { pageSize: number; current: number }) => {
    const result = await getContractList(params);
    return {
      list: result?.list,
      total: result?.total,
      pageSize: params.pageSize,
      current: params.current,
    };
  },
);

// 创建一个名为 listBaseSlice 的slice
const listBaseSlice = createSlice({
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
        state.pageSize = action.payload?.pageSize;
        state.current = action.payload?.current;
      })
      .addCase(getList.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearPageState } = listBaseSlice.actions;

export const selectListBase = (state: RootState) => state.listBase;

export default listBaseSlice.reducer;
