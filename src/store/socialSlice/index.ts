import { createSlice } from '@reduxjs/toolkit';

export const socialSlice = createSlice({
  name: 'social',
  initialState: {
    visible: false,
  },
  reducers: {
    show: (state) => {
      state.visible = true;
    },
    hide: (state) => {
      state.visible = false;
    },
  },
});

export const { show, hide } = socialSlice.actions;

export const selectVisible = (state: any) => state.social.visible;

export default socialSlice.reducer;
