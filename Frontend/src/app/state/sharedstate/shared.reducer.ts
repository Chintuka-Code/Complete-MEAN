import { createReducer, on } from '@ngrx/store';
import { aside, create_user_success, loading } from './shared.action';
import { Initial_State } from './shared.state';

const _loading_reducer = createReducer(
  Initial_State,
  on(loading, (state, action) => {
    return {
      ...state,
      spinner: action.spinner,
    };
  }),
  on(aside, (state, action) => {
    return {
      ...state,
      aside: !state.aside,
    };
  }),
  on(create_user_success, (state, action) => {
    return {
      ...state,
      user: action.response,
    };
  })
);

export const Shared_Reducer = (state, action) =>
  _loading_reducer(state, action);
