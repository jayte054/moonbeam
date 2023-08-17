import { useContext } from "react"
import { ProductCard } from "../../component/product-card/product-card.component"
import { Studio } from "../../component/studio/studio.component"
import { ProductContext } from "../../context/products.context"
import "./shop.style.scss"


const Shop = () => {
    const {products}: any = useContext(ProductContext)
    return (
        <>
         <header className="header-name">
                Moonbeam Cakes.
            </header>
            <div style={{textAlign:"center"}}>
            <Studio />
            </div>
        <div className="products-container">
            {products.map((product: any) => {
                return <ProductCard id={product.id} product={product}/>
            })}
        </div>
        </>
       
    )
}


export default Shop