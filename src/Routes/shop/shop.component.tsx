import { Fragment, useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { CategoriesContext } from "../../context/categories.context"
import CategoriesPreview from "../categoriesPreview/categories-preview.component"
import  {Category}  from "../category/category.component"
import "./shop.style.scss"


const Shop = () => {
    const {categoriesMap}: any = useContext(CategoriesContext)
    return (
       <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
       </Routes>
    )
}


export default Shop