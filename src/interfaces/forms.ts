export interface IUserSignInFormData {
  email: string;
  password: string;
}

export interface IUserSignUpFormData {
  name: string;
  email: string;
  birthday: string;
  password: string;
  password_confirmation: string;
}

export interface IUserUpdateFormData {
  name: string;
  email: string;
  birthday: string;
}

export interface IUserChangePasswordFormData {
  password: string;
  password_confirmation: string;
}

export interface ICreateChurrasFormData {
  title: string;
  date: string;
  hour: string;
  location: string;
  description: string;
  participants: {
    name: string;
    value: string;
  }[];
}

export interface IUpdateChurrasFormData {
  title: string;
  date: string;
  hour: string;
  location: string;
  description: string;
  participants: {
    id?: string;
    name: string;
    value: string;
    churras_id?: string;
  }[];
  deleted_participants?: string[];
}
