import { IRequestResult } from "../../../interfaces/IRequestResult";

export interface IUser {
    id:string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password?:string;
}

const signIn = async (email: string, password: string): Promise<IRequestResult<IUser>> => {
        console.log('> API: signIn()');
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


export const userService = {
    signIn,
    signUp,

}
