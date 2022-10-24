import { createReducer } from '@reduxjs/toolkit';
import {
  setDark,
  setLight,
} from './actions';

export type ModeState = {
  value: "light" | "dark";
};

const initialState: ModeState = {
  value: "light",
};

export const modeReducer = createReducer(initialState, builder => {
  builder
    .addCase(setDark, state => {
      state.value = "dark";
    })
    .addCase(setLight, state => {
      state.value = "light";
    })
});