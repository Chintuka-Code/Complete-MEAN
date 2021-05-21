export interface User {
  name: string;
  email: string;
  mobile_no: string;
  user_id?: string;
  created_at?: Date;
}

export interface Response {
  name: string;
  email: string;
  mobile_no: number;
  created_at: Date;
  avatar: string;
  gender: string;
  token: string;
  _id: string;
}

export interface UserCreateResponse {
  err: number;
  message: string;
  response: Response | any;
}
