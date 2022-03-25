export interface IRequestResult<T = any>{
    data: T;
    token?: string;
    success: boolean;
    messages?: string[]
}