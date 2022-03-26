import { IRequestResult } from "../../../interfaces/IRequestResult";

export interface ILinks {
    id:string;
    title:string;
    url:string;
    enabled:boolean;
    order: number;
}

const getLinksByUserId = async (id: string): Promise<IRequestResult<ILinks[]>> => {
  const response = {
      data:
        [
          {id: '1', title: 'LinckedIn', url: 'http://www.linckedin.com', order: 1, enabled: true},
          {id: '2', title: 'Instagram', url: 'http://www.instagram.com/@leonardo', order:2, enabled: true},
          {id: '3', title: 'Github', url: 'http://www.github.com', order:3, enabled: true},
        ],
      token:'jwt-123456', /* dados fakes que virão do backend */
      success: true,
      messages: [],
  } as IRequestResult<ILinks[]>

  return response;
}




export const linkService = {
  getLinksByUserId
}
