import {useContext} from "react";
import { CartContext } from "../../context/cart-context";
import "./checkout-item.styles.scss"

const CheckoutItem = ({cartItem}: any) => {
    const {name, imageUrl, quantity, price} = cartItem
    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext<any>(CartContext)

    const clearItemFromCartHandler = () => clearItemFromCart(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemFromCart(cartItem)
    return (
        <div className="checkout-item-container">
            <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow">
                    <span onClick={removeItemHandler}>&#10094;</span>
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow">
                <span onClick={addItemHandler}>&#10095;</span>
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={clearItemFromCartHandler}>&#10005;</div>

        </div>
    )
}

export default CheckoutItem