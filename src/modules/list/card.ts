import { RootState } from '../store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProductList, IProduct } from 'services/product';

const namespace = 'list/card';
interface IInitialState {
  pageLoading: boolean;
  current: number;
  pageSize: number;
  loading: boolean;
  total: number;
  productList: IProduct[];
}

const initialState: IInitialState = {
  pageLoading: false,
  current: 1,
  pageSize: 12,
  loading: false,
  total: 0,
  productList: [],
};

export const getList = createAsyncThunk(
  `${namespace}/getList`,
  async (params: { pageSize: number; current: number }) => {
    const { pageSize, current } = params;
    const result = await getProductList({ pageSize, current });

    return {
      list: result?.list,
      total: result?.total,
      pageSize: params.pageSize,
      current: params.current,
    };
  },
);

const listCardSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    switchPageLoading: (state, action) => {
      state.pageLoading = action.payload;
    },
    clearPageState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload?.current;
        state.pageSize = action.payload?.pageSize;
        state.total = action.payload?.total;
        state.productList = action.payload?.list;
      });
  },
});

export const { switchPageLoading, clearPageState } = listCardSlice.actions;

export const selectListCard = (state: RootState) => state.listCard;

export default listCardSlice.reducer;
