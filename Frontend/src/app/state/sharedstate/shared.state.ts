import { SharedState } from 'src/app/Model/shared.state.interface';
import { User } from 'src/app/Model/user.interface';

export const Initial_State: SharedState = {
  spinner: false,
  user: <User>{},
};
