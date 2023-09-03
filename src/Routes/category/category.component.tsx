import {useState,useContext, useEffect} from "react"
import { useParams } from "react-router-dom";
import { ProductCard } from "../../component/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";
import "./category.styles.scss";

 export const Category = () => {
    const {category}: any = useParams();
    const {categoriesMap} = useContext<any>(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])


    return(
        <>
        <header className="header-name">
                Moonbeam Cakes.
            </header>
        <h2 className="title">{category.toUpperCase()}</h2>
        <div className="category-container">
            {products && products.map((product: any) => (
                <ProductCard key={product.id} product={product}/>
            ) )}
        </div>
        </>

    )
}

// export default Category