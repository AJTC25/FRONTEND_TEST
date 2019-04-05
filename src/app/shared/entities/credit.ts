export interface ICredit {
    $key?: string,
    createdDate: number,
    amount: number,
    paymentDate?: Date
    state: boolean,
    payment: boolean
}