import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFeedsApi } from '@api';
import { TOrdersData } from '@utils-types';


type FeedState = {
  isLoading: boolean;
  error: string | null;
  orders: TOrdersData;
};


const initialState: FeedState = {
  isLoading: true,
  error: null,
  orders: {
    orders: [],
    total: 0,
    totalToday: 0
  }
};


export const fetchFeed = createAsyncThunk(
  'feed/fetchFeed',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getFeedsApi();
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ошибка загрузки ленты';
      return rejectWithValue(errorMessage);
    }
  }
);


const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeed.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFeed.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(fetchFeed.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  }
});


export default feedSlice.reducer;


export const selectFeed = (state: { feed: FeedState }) => state.feed;
export const selectFeedOrders = (state: { feed: FeedState }) => state.feed.orders;
export const selectFeedLoading = (state: { feed: FeedState }) => state.feed.isLoading;
export const selectFeedError = (state: { feed: FeedState }) => state.feed.error;