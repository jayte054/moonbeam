import { useContext } from "react"
import { CategoryPreview } from "../../component/category-preview/category-preview.component"
import { Studio } from "../../component/studio/studio.component"
import { CategoriesContext } from "../../context/categories.context"


const CategoriesPreview = () => {
    const {categoriesMap}: any = useContext(CategoriesContext)
    return (
        <div className="category-preview-container">
         <header className="header-name">
                Moonbeam Cakes.
            </header>
            <div style={{textAlign:"center"}}>
            <Studio />
            </div>
            {Object.keys(categoriesMap).map(title => {
               const product = categoriesMap[title]
               return <CategoryPreview key={title} title = {title} product = {product} />
            })}
           
        </div>
       
    )
}


export default CategoriesPreview