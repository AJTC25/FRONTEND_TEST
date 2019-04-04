export interface Credit {
   
    registerDate: Date,
    amount: number,
    paymentDate?: Date
    state: boolean,
    payment: boolean
}