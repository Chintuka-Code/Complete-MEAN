import { Response, User } from './user.interface';

export interface SharedState {
  spinner: boolean;
  user: Response;
  aside: boolean;
}
