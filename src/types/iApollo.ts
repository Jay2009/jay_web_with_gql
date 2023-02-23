export interface ILogin {
  userId: string;
  passwordHash: string;
}

export interface IUser {
  id: number;
  name: string;
  userId: string;
  passwordHash: string;
  authority: string[];
  token: string;
  post: string[];
}

export interface ILoginData {
  login: IUser | null;
}

export interface ILoginVars {
  userId: string;
  userPw: string;
}

export interface ILogoutData {
  logout: boolean;
}

export interface ISignupData {
  signup: boolean;
}

export interface ISignupVars {
  name: string;
  userId: string;
  userPw: string;
}

export interface ICurrentUserData {
  user: IUser;
}

export interface IAddPostData {
  errors?: {
    id: {
      message: string;
    };
  };
  title: string;
  writer?: string;
  content: string;
  tags?: [string];
  createdAt?: string;
}
