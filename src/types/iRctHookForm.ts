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
