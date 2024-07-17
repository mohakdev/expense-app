export interface transactionType {
    category : categoryType,
    amount : number,
    closingBalance : number
}
export interface categoryType {
    name : string,
    budgetAllocated? : number,
    budgetUsed? : number
}
export interface currencyType {
    id : number,
    name : string,
    symbol : string
}