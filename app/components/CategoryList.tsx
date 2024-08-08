import React from 'react'
import Category from './Category'
import { categoryType } from '../types'

interface ICategoryList {
    allCategories : categoryType[] | undefined,
    deleteCategory : (id:string) => void,
}

const CategoryList = (props : ICategoryList) => {
    return (
        props.allCategories?.map(function (category)
        {
            return <Category key={category.name} name={category.name} 
            onClick={() => props.deleteCategory(category.name)}/>
        })
    )
}

export default CategoryList;