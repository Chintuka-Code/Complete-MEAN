import { createAction, props } from '@ngrx/store';
import { Response } from 'src/app/Model/user.interface';

export const Loading_Action = '[ spinner page ] loading spinner';
export const Aside_Action = '[ aside page ] aside';
export const Create_User_Start_Action = '[ Reg page ] Create User';
export const Create_User_Success_Action = '[ Reg page ] Create User Success';

export const loading = createAction(
  Loading_Action,
  props<{ spinner: boolean }>()
);

export const aside = createAction(Aside_Action);

export const create_user_start = createAction(
  Create_User_Start_Action,
  props<{ data: any }>()
);

export const create_user_success = createAction(
  Create_User_Success_Action,
  props<{ response: Response }>()
);
