import type { RootState } from '../../app/store';

import { createSelector } from '@reduxjs/toolkit';

const selectMode = (state: RootState) => state.mode.value;

export const modeSelector = createSelector(selectMode, state => state);