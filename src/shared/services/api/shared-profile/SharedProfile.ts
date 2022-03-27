import { IRequestResult } from "../../../interfaces/IRequestResult";

export interface ILinksSharedProfile {
  title: string;
  url: string;
}

export interface ISharedProfile {
  title: string;
  username: string;
  email: string;
  bio: string;
  links: ILinksSharedProfile[]
}

const getSharedProfileByUsername = async (username: string): Promise<IRequestResult<ISharedProfile>> => {
  const response = {
      data: {
          title: 'Leonardo Silva',
          username: "leosilva",
          email: 'silvaleonardo.ti@gmail.com',
          bio: 'Software Engineer',
          links: [
            {
              title: 'Github',
              url:  'https://github.com/leosilva-dev'
            },
            {
              title: 'Linkedin',
              url: 'https://www.linkedin.com/in/leonardosilva-dev/'
            },
            {
              title: 'Twitter',
              url:  'https://twitter.com/leonaardo__s'
            }
          ]
      } as ISharedProfile,
      success: true,
      messages: [],
  } as IRequestResult<ISharedProfile>

  return response;
}




export const sharedProfileService = {
  getSharedProfileByUsername
}
