import { IRequestResult } from "../../../interfaces/IRequestResult";

export interface IUser {
    id:string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    links?: string[];
}
export interface IUserSignUpReturn extends Omit<IUser, 'links'> {
    token: string
    password:string;
}

export interface IUserSignInReturn extends Omit<IUser, 'links'> {
    token: string
    password:string;
}

const signIn = async (email: string, password: string): Promise<IRequestResult<IUserSignInReturn>> => {
    
        const result = {
            data: {
                id: "1",
                username: "leosilva",
                firstName: "Leonardo",
                lastName: "Silva",
                email: email,
                links: [''],
                token: 'jwt-123456',
                password: password,
            } as IUserSignInReturn,
            success: true,
            messages: [],
        } as IRequestResult<IUserSignInReturn> 
        
        return result;

}

const signUp = async (user: Omit<IUser, 'id'|'links'>): Promise<IRequestResult<IUserSignUpReturn>> => {
    const result = {
        data: {
            id:'1', /* dados fakes que virão do backend */
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: 'jwt-123456', /* dados fakes que virão do backend */
            password: '123456', /* dados fakes que virão do backend */
        } as IUserSignUpReturn,
        success: true,
        messages: [],
    } as IRequestResult<IUserSignUpReturn> 
    
    return result;
}


export const userService = {
    signIn,
    signUp,

}
