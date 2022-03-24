import { IRequestResult } from "../../interfaces/IRequestResult";

export interface IUser{
    id:string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    links: string[];
}

export interface IUserSingUp{
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password:string;
}

const signIn = (email: string, password: string): Promise<IRequestResult<IUser>> => {
    return new Promise<IRequestResult>((resolve, reject) => {})
}

const signUp = (user: IUserSingUp): Promise<IRequestResult<IUser>> => {
    return new Promise<IRequestResult>((resolve, reject) => {})
}


export const userService = {
    signIn,
    signUp,

}
