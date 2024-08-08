export interface transactionType {
    transactionName : string,
    amount : number,
    category : categoryType,
    closingBalance : number,
    transactionID : number,
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