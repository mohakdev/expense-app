import React, { createContext, useState, useContext, ReactNode } from 'react';
import { currencyType } from './Logic/types';

const CurrencyContext = createContext<currencyType | undefined>(undefined);

export const CurrencyProvider = ({children}: {children: ReactNode}) => {
    const defaultCurrency : currencyType = {id:2,name:"INR",symbol:"₹"};

    return (
        <CurrencyContext.Provider value={defaultCurrency}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrencyContext = () : currencyType => {
    const context = useContext(CurrencyContext);
    if (context === undefined) {
        throw new Error('useCurrencyContext must be used within an CurrencyProvider');
    }
    return context;
};