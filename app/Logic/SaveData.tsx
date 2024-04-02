interface transactionType {
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
    id : string,
    name : string,
    symbol : string
}

interface dataInterface {
    currentBalance : number,
    categories : categoryType[],
    transactions : transactionType[]
}

let categories : categoryType[] = [{name: 'Mango'},{name:'Apple'},{name : 'Guava'}];

export function SaveCategories(props : categoryType[])
{
    categories = props;
}
export function LoadCategories()
{
    return categories;
}