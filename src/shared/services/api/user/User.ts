import { IRequestResult } from "../../../interfaces/IRequestResult";

export interface IUser {
    id:string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password?:string;
    description?:string;
}

const getUserByToken = async (token: string): Promise<IRequestResult<IUser>> => {
    const response = {
        data: {
            id:'1', /* dados fakes que virão do backend */
            username: "leosilva",
            firstName: "Leonardo",
            lastName: "Silva",
            email: 'silvaleonardo.ti@gmail.com',
        } as IUser,
        token:'jwt-123456', /* dados fakes que virão do backend */
        success: true,
        messages: [],
    } as IRequestResult<IUser>

    return response;
}




export const userService = {
    getUserByToken
}
