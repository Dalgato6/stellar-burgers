<<<<<<< HEAD
import { 
  combineReducers, 
  configureStore,
  ThunkAction,
  Action 
} from '@reduxjs/toolkit';
import { 
  TypedUseSelectorHook,
  useDispatch as reduxDispatchHook,
  useSelector as reduxSelectorHook
} from 'react-redux';


import ingredientReducer from '../slices/ingredientSlice';
import burgerConstructorReducer from '../slices/burgerConstructorSlice';
import feedReducer from '../slices/feedSlice';
import orderReducer from '../slices/orderSlice';
import userReducer from '../slices/userSlice';
import modalReducer from '../slices/modalSlice';

const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  burgerConstructor: burgerConstructorReducer,
  feed: feedReducer,
  order: orderReducer,
  user: userReducer,
  modal: modalReducer
});

export const setupStore = () => configureStore({
=======
import { configureStore } from '@reduxjs/toolkit';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

const rootReducer = () => {}; // Заменить на импорт настоящего редьюсера

const store = configureStore({
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

<<<<<<< HEAD
export const store = setupStore();


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


export const useAppDispatch = () => reduxDispatchHook<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = reduxSelectorHook;


export default store;
=======
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
>>>>>>> 9fb9048013bb250a7431808b754de003959eb3a9
