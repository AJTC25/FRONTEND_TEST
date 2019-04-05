import { ICredit } from './credit';

export interface IUser {
    $key?:string,
    name: string,
    createdDate: number,
    email: string,
    identification?: number,
    credits?: ICredit[]
}