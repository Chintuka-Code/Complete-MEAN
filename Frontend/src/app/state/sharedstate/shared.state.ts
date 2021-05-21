import { SharedState } from 'src/app/Model/shared.state.interface';
import { Response, User } from 'src/app/Model/user.interface';

export const Initial_State: SharedState = {
  spinner: false,
  user: <Response>{},
  aside: false,
};
