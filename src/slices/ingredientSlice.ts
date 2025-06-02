import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getIngredientsApi } from '@api';
import { TIngredient } from '@utils-types';


export type IngredientsState = {
  ingredients: TIngredient[];
  isLoading: boolean;
  error: string | null;
};


const initialState: IngredientsState = {
  ingredients: [],
  isLoading: false,
  error: null
};


export const INGREDIENTS_FEATURE_KEY = 'ingredients';
export const FETCH_INGREDIENTS_ACTION = 'ingredients/fetchIngredients';


export const fetchIngredients = createAsyncThunk(
  FETCH_INGREDIENTS_ACTION,
  async (_, { rejectWithValue }) => {
    try {
      const response = await getIngredientsApi();
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ошибка загрузки ингредиентов';
      return rejectWithValue(errorMessage);
    }
  }
);


const ingredientsSlice = createSlice({
  name: INGREDIENTS_FEATURE_KEY,
  initialState,
  reducers: {

    clearIngredientsError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredients = action.payload;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  }
});


export const { clearIngredientsError } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;


export const selectAllIngredients = (state: { [INGREDIENTS_FEATURE_KEY]: IngredientsState }) => 
  state[INGREDIENTS_FEATURE_KEY].ingredients;

export const selectIngredientsLoading = (state: { [INGREDIENTS_FEATURE_KEY]: IngredientsState }) => 
  state[INGREDIENTS_FEATURE_KEY].isLoading;

export const selectIngredientsError = (state: { [INGREDIENTS_FEATURE_KEY]: IngredientsState }) => 
  state[INGREDIENTS_FEATURE_KEY].error;