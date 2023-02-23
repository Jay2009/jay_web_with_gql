export interface ILoginFormData {
  id: string;
  pw: string;
  errors?: {
    id: {
      message: string;
    };
  };
}

export interface IRegisterFormData {
  errors?: {
    id: {
      message: string;
    };
  };
  formId: string;
  formPw: string;
  formName: string;
}

export interface IPostFormData {
  errors?: {
    id: {
      message: string;
    };
  };
  title: string;
  content: string;
  tags?: [string];
  writer?: string;
}

export interface IProfilChangeFormData {
  userId: string;
  name: string;
  userPw?: string | null | undefined;
  errors?: {
    id: {
      message: string;
    };
  };
}
