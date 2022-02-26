import { RootState } from './../../store/config';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

type SettingsState = {
  country: Country;
};

const initialState: SettingsState = {
  country: 'gb'
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<Country>) => {
      state.country = action.payload;
    }
  }
});

export const { setCountry } = settingsSlice.actions;

export const getCountry = createSelector(
  (state: RootState) => state.settings.country,
  (country) => country
);
