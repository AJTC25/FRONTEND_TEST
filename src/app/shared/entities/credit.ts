export interface ICredit {
    createdDate: string,
    amount: number,
    paymentDate?: Date
    state: boolean,
    payment: boolean
}