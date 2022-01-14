export interface IAuthContextData {
  user: IUser;
  isAuthenticated: boolean;
  handleSignIn: (credentials: IUserSignInRequestDTO) => Promise<void>;
  handleSignUp: (payload: IUserSignUpRequestDTO) => Promise<void>;
  handleSignOut: () => void;
  handleUpdateUser: (payload: IUserUpdateRequestDTO) => Promise<void>;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  birthday: Date;
  created_at: Date;
  updated_at: Date;
}

export interface IUserSignInRequestDTO {
  email: string;
  password: string;
}

type IAuthResponseDTO = {
  user: IUser;
  token: string;
};

export type IUserSignInResponseDTO = IAuthResponseDTO;

export type IUserSignUpResponseDTO = IAuthResponseDTO;

export interface IUserSignUpRequestDTO {
  email: string;
  password: string;
}

export interface IUserUpdateRequestDTO {
  name: string;
  email: string;
  birthday: string;
}

export interface IUserChangePasswordRequestDTO {
  password: string;
  password_confirmation: string;
}
