import { ICredit } from './credit';

export interface IUser {
    name: string,
    createdDate: string,
    email: string,
    identificacion: number,
    credits?: ICredit[]
}