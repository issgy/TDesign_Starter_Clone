import { RootState } from 'modules/store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const namespace = 'user';
const TOKEN_NAME = 'tdesign-starter';

interface IUserInfo {
  account: string;
  password: string;
}

const initialState = {
  token: localStorage.getItem(TOKEN_NAME) || 'main_token',
  userInfo: {},
};

export const login = createAsyncThunk(`${namespace}/login`, async (userInfo: IUserInfo) => {
  const mockLogin = async (userInfo: IUserInfo) => {
    const { account, password } = userInfo;
    if (account !== 'xj') {
      return {
        code: 401,
        message: '账号不存在',
      };
    }
    if (password !== '123') {
      return {
        code: 401,
        message: '密码错误',
      };
    }

    return {
      code: 200,
      message: '登陆成功',
      data: 'main_token',
    };
  };

  const res = await mockLogin(userInfo);
  if (res.code === 200) {
    return res.data;
  }
  throw res;
});

// 创建一个名为 userSlice 的slice
const userSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('TOKEN_NAME');
      state.token = '';
      state.userInfo = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      localStorage.setItem(TOKEN_NAME, action.payload!);

      state.token = action.payload!;
    });
  },
});

export const User = (state: RootState) => state.user;

export const { logout } = userSlice.actions;

export default userSlice.reducer;
