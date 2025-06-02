import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export type ModalState = {
  title: string;
  isOpen: boolean;
};


export const MODAL_FEATURE_KEY = 'modal';


const initialState: ModalState = {
  title: '',
  isOpen: false
};


const modalSlice = createSlice({
  name: MODAL_FEATURE_KEY,
  initialState,
  reducers: {

    openModal: {
      reducer: (state, action: PayloadAction<string>) => {
        state.isOpen = true;
        state.title = action.payload;
      },
      prepare: (title: string = '') => ({ payload: title })
    },
    

    closeModal: (state) => {
      state.isOpen = false;
      state.title = '';
    },
    

    updateModalTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    }
  }
});


export const { openModal, closeModal, updateModalTitle } = modalSlice.actions;
export default modalSlice.reducer;


export const selectModalState = (state: { [MODAL_FEATURE_KEY]: ModalState }) => 
  state[MODAL_FEATURE_KEY];

export const selectModalIsOpen = (state: { [MODAL_FEATURE_KEY]: ModalState }) => 
  state[MODAL_FEATURE_KEY].isOpen;

export const selectModalTitle = (state: { [MODAL_FEATURE_KEY]: ModalState }) => 
  state[MODAL_FEATURE_KEY].title;