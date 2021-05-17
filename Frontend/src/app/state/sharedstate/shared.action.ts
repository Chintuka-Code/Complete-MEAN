import { createAction, props } from '@ngrx/store';

export const Loading_Action = '[ spinner page ] loading spinner';
export const Aside_Action = '[ aside page ] aside';

export const loading = createAction(
  Loading_Action,
  props<{ spinner: boolean }>()
);

export const aside = createAction(Aside_Action);
