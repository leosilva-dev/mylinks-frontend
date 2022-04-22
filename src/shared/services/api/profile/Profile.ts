import { IRequestResult } from "../../../interfaces/IRequestResult";
import { Api } from "../../axios-config/AxiosConfig";

export interface IUser {
    _id:string;
    username: string;
    name: string;
    email: string;
    bio:string;
}

export interface ILinks {
  id:string;
  title:string;
  url:string;
  enabled:boolean;
  order: number;
}

export interface IProfileToUpdate extends IUser {
  links: ILinks[];
}


const getUser = async (): Promise<IRequestResult<IUser> | undefined> => {
  try {
    const { data } = await Api.get<IRequestResult<IUser>>('/user');

    const response = {
      data: data.data,
      success: data.success,
      message: data.message,
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

const getLinks = async (): Promise<IRequestResult<ILinks[]>> => {
try {
  const {data} = await Api.get<IRequestResult<ILinks[]>>('/links');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const links: ILinks[] = data.data.map((link: any) => {
    return {
      id: link._id,
      title: link.title,
      url: link.url,
      enabled: link.enabled,
      order: link.order,
    }
  })

  const response = {
    data: links,
    success: data.success,
    message: data.message,
} as IRequestResult<ILinks[]>

  return response;

} catch {
    const response = {
    data: {} as ILinks[],
    success: false,
    message: 'Erro ao recuperar dados, tente novamente mais tarde...',
} as IRequestResult<ILinks[]>

  return response;
}

}

const updateProfile = async (profile: IProfileToUpdate): Promise<IRequestResult<IProfileToUpdate>> => {
  try {
    const {data} = await Api.put<IRequestResult<IProfileToUpdate>>(`/users/`, profile);

    const response = {
      data: data.data,
      success: data.success,
      message: data.message,
  } as IRequestResult<IProfileToUpdate>

  return response;

  } catch (error) {
    const response = {
      data: {} as IUser,
      success: false,
      message: '',
  } as IRequestResult<IProfileToUpdate>

  return response;
  }
}




export const profileService = {
  getUser,
  getLinks,
  updateProfile
}
