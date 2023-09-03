import {Link} from "react-router-dom"
import { ProductCard } from "../product-card/product-card.component"
import "./category-preview.styles.scss"

export const CategoryPreview = ({title, product}: any) => {
    return (
        <div className="category-preview-container">
            <h2>
                <Link className="title" to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className="preview">
                {
                    product.filter((_: any, idx: any) => idx < 4)
                    .map(((product: any) => <ProductCard key={title.id} product = {product} />))
                }
            </div>
        </div>
    )
}