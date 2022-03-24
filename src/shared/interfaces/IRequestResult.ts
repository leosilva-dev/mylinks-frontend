export interface IRequestResult<T = any>{
    data: T;
    success: boolean;
    messages?: string[]
}