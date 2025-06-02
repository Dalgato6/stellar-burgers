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
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

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