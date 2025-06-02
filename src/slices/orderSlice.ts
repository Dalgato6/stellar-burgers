import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getOrderByNumberApi, getOrdersApi, orderBurgerApi } from '@api';
import { TOrder, newOrder } from '@utils-types';


export const ORDER_FEATURE_KEY = 'order';

export type OrderState = {
  userOrders: TOrder[];
  isLoading: boolean;
  error: string | null;
  orderRequest: boolean;
  orderModalData: TOrder | null;
  userOrdersLoading: boolean;
};


const initialState: OrderState = {
  userOrders: [],
  userOrdersLoading: false,
  isLoading: false,
  error: null,
  orderModalData: null,
  orderRequest: false
};


export const fetchOrders = createAsyncThunk(
  'order/fetchOrders',
  async (_, { rejectWithValue }) => {
    try {
      return await getOrdersApi();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ошибка загрузки заказов';
      return rejectWithValue(errorMessage);
    }
  }
);

export const fetchOrderByNumber = createAsyncThunk(
  'order/fetchOrderByNumber',
  async (number: number, { rejectWithValue }) => {
    try {
      const result = await getOrderByNumberApi(number);
      if (!result.orders.length) throw new Error('Заказ не найден');
      return result.orders[0];
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ошибка загрузки заказа';
      return rejectWithValue(errorMessage);
    }
  }
);

export const fetchOrderBurger = createAsyncThunk(
  'order/fetchOrderBurger',
  async (ingredients: string[], { rejectWithValue }) => {
    try {
      const result = await orderBurgerApi(ingredients);
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ошибка создания заказа';
      return rejectWithValue(errorMessage);
    }
  }
);


const orderSlice = createSlice({
  name: ORDER_FEATURE_KEY,
  initialState,
  reducers: {
    resetOrderModalData: (state) => {
      state.orderModalData = null;
    },
    clearOrderError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {

    builder.addCase(fetchOrders.pending, (state) => {
      state.userOrdersLoading = true;
      state.error = null;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.userOrdersLoading = false;
      state.userOrders = action.payload;
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.userOrdersLoading = false;
      state.error = action.payload as string;
    });


    builder.addCase(fetchOrderByNumber.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchOrderByNumber.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orderModalData = action.payload;
    });
    builder.addCase(fetchOrderByNumber.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });


    builder.addCase(fetchOrderBurger.pending, (state) => {
      state.isLoading = true;
      state.orderRequest = true;
      state.error = null;
    });
    builder.addCase(fetchOrderBurger.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orderRequest = false;
      state.orderModalData = action.payload.order;
    });
    builder.addCase(fetchOrderBurger.rejected, (state, action) => {
      state.isLoading = false;
      state.orderRequest = false;
      state.error = action.payload as string;
    });
  }
});


export const { resetOrderModalData, clearOrderError } = orderSlice.actions;
export default orderSlice.reducer;


export const selectOrderState = (state: { [ORDER_FEATURE_KEY]: OrderState }) => 
  state[ORDER_FEATURE_KEY];

export const selectUserOrders = (state: { [ORDER_FEATURE_KEY]: OrderState }) => 
  state[ORDER_FEATURE_KEY].userOrders;

export const selectOrderLoading = (state: { [ORDER_FEATURE_KEY]: OrderState }) => 
  state[ORDER_FEATURE_KEY].isLoading;

export const selectOrderModalData = (state: { [ORDER_FEATURE_KEY]: OrderState }) => 
  state[ORDER_FEATURE_KEY].orderModalData;