import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import SHOP_DATA from "../studio-data"

export const CategoriesContext: any = createContext({
    products : []
})

export const CategoriesProvider = ({children}: any) => {
    const [categoriesMap, setCategoriesMap] = useState([])

    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            console.log(categoryMap)
            setCategoriesMap(categoryMap)
        }  
        getCategoryMap()  
    },[])

    const value = {categoriesMap}
    return (
        <CategoriesContext.Provider value ={value}>{children}</CategoriesContext.Provider>
    )
}