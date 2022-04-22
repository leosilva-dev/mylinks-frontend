import { IRequestResult } from "../../../interfaces/IRequestResult";
import { Api } from "../../axios-config/AxiosConfig";

export interface ILinksSharedProfile {
  title: string;
  url: string;
}

export interface ISharedProfile {

    user:{
      name: string;
      username: string;
      email: string;
      bio: string;

    },
    links: ILinksSharedProfile[];

}

const getSharedProfileByUsername = async (username: string): Promise<IRequestResult<ISharedProfile>> => {
  try {
    const {data} = await Api.get<IRequestResult<ISharedProfile>>(`/@/${username}`);

    const response = {
      data: data.data,
      success: data.success,
      message: data.message,
  } as IRequestResult<ISharedProfile>

  return response;

  } catch (error) {
    const response = {
      data: {} as ISharedProfile,
      success: false,
      message: '',
  } as IRequestResult<ISharedProfile>

  return response;
  }



}




export const sharedProfileService = {
  getSharedProfileByUsername
}
