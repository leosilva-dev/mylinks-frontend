export interface IRequestResult<T = unknown>{
    data: T;
    token?: string;
    success: boolean;
    message: string;
}
