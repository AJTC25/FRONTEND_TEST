import { Credit } from './credit';

export interface IUser {
    $key?: string,
    name: string,
    credits?: Credit[]
    // registerDate: Date,
    // email: string,
    // identificacion: number
}