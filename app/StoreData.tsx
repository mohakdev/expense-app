import AsyncStorage from "@react-native-async-storage/async-storage";
import { categoryType, currencyType, transactionType } from "./types";

const transactionKey = "transaction*";
const categoryKey = "categories*";
const currencyKey = "currency*";
const budgetKey = "budget*";


export const LoadTransactions = async() : Promise<transactionType[]> => {
    try {
        const jsonData = await AsyncStorage.getItem(transactionKey);
        if (jsonData) {
            return JSON.parse(jsonData) as transactionType[];
        }
        return [];
    } 
    catch (error) 
    {
        console.error("Error loading from AsyncStorage", error);
        return [];
    }
};

export const LoadCategories = async () : Promise<categoryType[]> => {
    try {
        const jsonData = await AsyncStorage.getItem(categoryKey);
        if (jsonData) {
            return JSON.parse(jsonData) as categoryType[];
        }
        return [];
    } 
    catch (error) 
    {
        console.error("Error loading from AsyncStorage", error);
        return [];
    }
};


export const LoadCurrency = async() : Promise<currencyType> => {
    const defaultCurrency : currencyType = {id:2,name:"INR",symbol:"₹"};
    try {
        const jsonData = await AsyncStorage.getItem(currencyKey);
        if (jsonData) {
            return JSON.parse(jsonData) as currencyType;
        }
        return defaultCurrency;
    } 
    catch (error) 
    {
        console.error("Error loading from AsyncStorage", error);
        return defaultCurrency;
    }
};
export const LoadBudget = async() : Promise<number> => {
    try {
        const jsonData = await AsyncStorage.getItem(budgetKey);
        if (jsonData) {
            return JSON.parse(jsonData) as number;
        }
        return 0;
    } 
    catch (error) 
    {
        console.error("Error loading from AsyncStorage", error);
        return 0;
    }
};

export const SaveTransactions = async (transactions : transactionType[]) => {
    try {
        const jsonData = JSON.stringify(transactions);
        await AsyncStorage.setItem(transactionKey, jsonData);
    } 
    catch (error) {
        console.error("Error saving to AsyncStorage", error);
    }
};

export const SaveCategories = async (categories : categoryType[]) => {
    try {
        const jsonData = JSON.stringify(categories);
        await AsyncStorage.setItem(categoryKey, jsonData);
    } catch (error) {
        console.error("Error saving to AsyncStorage", error);
    }
};
export const SaveCurrency = async (currency : currencyType) => {
    try {
        const jsonData = JSON.stringify(currency);
        await AsyncStorage.setItem(currencyKey, jsonData);
    } catch (error) {
        console.error("Error saving to AsyncStorage", error);
    }
};
export const SaveBudget = async (amount : number) => {
    try {
        const jsonData = JSON.stringify(amount);
        await AsyncStorage.setItem(budgetKey, jsonData);
    } catch (error) {
        console.error("Error saving to AsyncStorage", error);
    }
};