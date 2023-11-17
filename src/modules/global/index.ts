import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'modules/store';
import { TColorToken, TColorSeries, COLOR_TOKEN, LIGHT_CHART_COLORS } from '../../configs/color';

const namespace = 'global';

export type TTheme = 'light' | 'dark';

export interface IGlobalState {
  loading: boolean;
  version: string;
  layout: 'layout1' | 'layout2' | 'layout3';
  collapsed: boolean; // 菜单展开或闭合
  color: string;
  setting: boolean;
  theme: TTheme;
  showHeader: boolean;
  showBreadcrumbs: boolean;
  showFooter: boolean;
  colorList: TColorSeries;
  chartColors: TColorToken;
}

const initialState: IGlobalState = {
  loading: false,
  version: '0.0.1',
  layout: 'layout1',
  collapsed: window.innerWidth < 1000, // 宽度小于1000菜单闭合
  color: '#0052D9',
  setting: false,
  theme: 'light',
  showHeader: true,
  showBreadcrumbs: false,
  showFooter: true,
  colorList: COLOR_TOKEN,
  chartColors: LIGHT_CHART_COLORS,
};

// createSlice 是 Redux Toolkit 中的一个函数，用于快速创建 Redux reducer 和相关的 action creators。
/* 使用 createSlice 函数创建了一个名为 globalSlice 的 slice。传入函数的参数是一个包含 name, initialState 和 reducers 
属性的对象。name 是 slice 的唯一标识符，initialState 是 slice 的初始状态，reducers 是一个包含 reducer 函数的对象。 */
const globalSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      if (action.payload === null) {
        state.collapsed = !state.collapsed;
      } else {
        state.collapsed = action.payload;
      }
    },
    toggleSetting: (state) => {
      state.setting = !state.setting;
    },
    switchTheme: (state, action) => {
      if (action?.payload) {
        state.theme = action?.payload;
        document.documentElement.setAttribute('theme-mode', action?.payload);
      }
    },
    switchColor: (state, action) => {
      if (action?.payload) {
        state.color = action?.payload;
        document.documentElement.style.setProperty('--td-brand-color', action?.payload);
      }
    },
    switchLayout: (state, action) => {
      if (action?.payload) {
        state.layout = action?.payload;
      }
    },
    toggleShowHeader: (state) => {
      state.showHeader = !state.showHeader;
    },
    toggleShowFooter: (state) => {
      state.showFooter = !state.showFooter;
    },
    toggleShowBreadcrumbs: (state) => {
      state.showBreadcrumbs = !state.showBreadcrumbs;
    },
    switchChartColor: (state, action) => {
      if (action?.payload) {
        state.chartColors = action?.payload;
      }
    },
  },
});

export const selectGlobal = (state: RootState) => state.global;

// 通过解构赋值将这些 action creators 单独导出。
export const {
  toggleMenu,
  toggleSetting,
  switchTheme,
  switchColor,
  switchLayout,
  toggleShowHeader,
  toggleShowFooter,
  toggleShowBreadcrumbs,
  switchChartColor,
} = globalSlice.actions;

// 同时，还会通过 export default 导出生成的 reducer 函数。
export default globalSlice.reducer;

/* 使用 createSlice 可以避免手动编写繁琐的 action types、action creators 和 reducer 函数，减少了样板代码，
并提供了一种更加简洁和直观的方式来定义和处理 Redux 的 state 和 actions。 */
