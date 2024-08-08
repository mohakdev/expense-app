import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { currencyType } from './types';
import { LoadCurrency } from './StoreData';

const CurrencyContext = createContext<[currencyType,React.Dispatch<React.SetStateAction<currencyType>>] | undefined>(undefined);

export const CurrencyProvider = ({children}: {children: ReactNode}) => {
    const [currency,setCurrency] = useState<currencyType>({id:2,name:"INR",symbol:"₹"});
    useEffect(() => {
        const fetchCurrency = async () => {
            const loadedCurrency = await LoadCurrency();
            setCurrency(loadedCurrency);
        };
        fetchCurrency();
    }, []);
    return (
        <CurrencyContext.Provider value={[currency,setCurrency]}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrencyContext = () : [currencyType,React.Dispatch<React.SetStateAction<currencyType>>] => {
    const context = useContext(CurrencyContext);
    if (context === undefined) {
        throw new Error('useCurrencyContext must be used within an CurrencyProvider');
    }
    return context;
};