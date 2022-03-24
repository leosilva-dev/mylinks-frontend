import { IRequestResult } from "../../../interfaces/IRequestResult";

export interface IUser{
    id:string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    links: string[];
    token: string
    password:string;
}



const signIn = (email: string, password: string): Promise<IRequestResult<IUser>> => {
    return new Promise<IRequestResult>((resolve, reject) => {})
}

const signUp = (user: IUser): Promise<IRequestResult<IUser>> => {
    return new Promise<IRequestResult>((resolve, reject) => {})
}


export const userService = {
    signIn,
    signUp,

}
