import { IRequestResult } from "../../../interfaces/IRequestResult";
import { Api } from "../../axios-config/AxiosConfig";
import { IUser } from "../profile/Profile";

export interface IRegisterUser {
  name: string;
  username: string;
  email: string;
  password: string;
}

const login = async (email: string, password: string): Promise<IRequestResult<IUser>> => {
  try {
    const {data} = await Api.post<IRequestResult<IUser>>('/login', {email, password});

    const response = {
      data: data.data,
      success: data.success,
      message: data.message,
      token: data.token,
  } as IRequestResult<IUser>

    return response;

  } catch {
      const response = {
      data: {} as IUser,
      success: false,
      message: 'Erro ao fazer login',
  } as IRequestResult<IUser>

    return response;
  }
}

const register = async (user: IRegisterUser): Promise<IRequestResult<IUser>> => {
  try {
    const {data} = await Api.post<IRequestResult<IUser>>('/register', user);

    const response = {
      data: data.data,
      success: data.success,
      message: data.message,
      token: data.token,
  } as IRequestResult<IUser>

    return response;

  } catch (error) {
      const response = {
      data: {} as IUser,
      success: false,
      message: '',
  } as IRequestResult<IUser>

    return response;
  }
}

export const authService = {
  login,
  register,
}
