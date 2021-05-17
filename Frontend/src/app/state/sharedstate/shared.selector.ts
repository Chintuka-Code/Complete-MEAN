import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from 'src/app/Model/shared.state.interface';

const get_Shared_State = createFeatureSelector<SharedState>('shared');

export const getLoading = createSelector(
  get_Shared_State,
  (state) => state.spinner
);

export const getAside = createSelector(
  get_Shared_State,
  (state) => state.aside
);
