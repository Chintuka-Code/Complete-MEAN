import { createAction, props } from '@ngrx/store';

export const Loading_Action = '[ spinner page ] loading spinner';

export const loading = createAction(
  Loading_Action,
  props<{ spinner: boolean }>()
);
