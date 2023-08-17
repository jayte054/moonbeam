import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import { Button } from "../button/button.component"
import "./product-card.style.scss"

export const ProductCard = ({product}: any) => {
    const {name, price, imageUrl} = product
    const {addItemToCart} = useContext<any>(CartContext)

    const addProduct = () => {
        console.log("here")
        try{
             addItemToCart(product)
             console.log("hereeee")
        }catch(error){
            console.log(error)
        }
    } 


    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted"
                    onClick={addProduct}
            >
                    Add to Card
            </Button>
        </div>
    )
}