export type SignUpFormInputs = {
  email: string;
  password: string;
  displayName?: string;
};

export interface RegisterData {
  email: string;
  password: string;
  displayName?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export type AuthTypes = {
  SignUpFormInputs: SignUpFormInputs;
  RegisterData: RegisterData;
  LoginData: LoginData;
};
