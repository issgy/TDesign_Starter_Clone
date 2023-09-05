import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import global from './global';

// 使用combineReducers函数将多个reducer组合成一个单一的reducer
const reducer = combineReducers({
  global,
});

// 使用configureStore函数来定义一个Redux Store
const store = configureStore({
  reducer,
});

// export type ： Typescript中导出类型别名的语法，以便其它模块可以使用该类型

// 都是使用typeof store.<method>来创建的类型别名
// RootState表示整个Redux Store的状态类型
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch表示Redux Store的dispatch方法的类型
export type AppDispatch = typeof store.dispatch;

// 都是自定义的hook
// useAppDispatch用于在组件中获取Redux Store的dispatch方法，并将其类型设置为AppDispatch
// useDispatch 是一个用于获取 Redux store 的 dispatch 方法的钩子。它返回一个类型为 Dispatch 的函数，可用于分发 action
export const useAppDispatch = () => useDispatch<AppDispatch>();
// useAppSelector是useSelector的类型化版本，并将其泛型参数设置为RootState。在使用该钩子时，你将获得与 RootState 具有相同类型的状态
// TypedUseSelectorHook 是一个用于创建自定义 useAppSelector 钩子的类型别名。它接受一个泛型参数，用于指定 Redux store 的根状态类型。
// 使用 TypedUseSelectorHook 可以确保在使用 useAppSelector 钩子时，得到与 Redux store 根状态类型匹配的类型提示。
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
