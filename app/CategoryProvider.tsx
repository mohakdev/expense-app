import React, { createContext, useState, useContext, ReactNode } from 'react';
import { categoryType } from './Logic/types';

const CategoryContext = createContext<[categoryType[],React.Dispatch<React.SetStateAction<categoryType[]>>] | undefined>(undefined);

export const CategoryProvider = ({children}: {children: ReactNode}) => {
    const [state, setState] = useState<categoryType[]>([]);

    return (
        <CategoryContext.Provider value={[state,setState]}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategoryContext = () : [categoryType[],React.Dispatch<React.SetStateAction<categoryType[]>>] => {
    const context = useContext(CategoryContext);
    if (context === undefined) {
        throw new Error('useCategoryContext must be used within an CategoryProvider');
    }
    return context;
};