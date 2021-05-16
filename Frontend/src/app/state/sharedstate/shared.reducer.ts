import { createReducer, on } from '@ngrx/store';
import { loading } from './shared.action';
import { Initial_State } from './shared.state';

const _loading_reducer = createReducer(
  Initial_State,
  on(loading, (state, action) => {
    return {
      ...state,
      spinner: action.spinner,
    };
  })
);

export const Shared_Reducer = (state, action) =>
  _loading_reducer(state, action);
