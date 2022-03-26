import { IRequestResult } from "../../../interfaces/IRequestResult";
import { IUser } from "../user/User";

const signIn = async (email: string, password: string): Promise<IRequestResult<IUser>> => {
  const response = {
      data: {
          id: "1",
          username: "leosilva",
          firstName: "Leonardo",
          lastName: "Silva",
          email: email,
      } as IUser,
      token:'jwt-123456',
      success: true,
      messages: [],
  } as IRequestResult<IUser>

  return response;

}

const signUp = async (user: IUser): Promise<IRequestResult<IUser>> => {
const response = {
  data: {
      id:'1', /* dados fakes que virão do backend */
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
  } as IUser,
  token:'jwt-123456', /* dados fakes que virão do backend */
  success: true,
  messages: [],
} as IRequestResult<IUser>

return response;
}

export const authService = {
  signIn,
  signUp,
}
