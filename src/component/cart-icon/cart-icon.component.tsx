import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import {FaShoppingBasket} from "react-icons/fa"
import "./cart-icon.styles.scss"

export const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount}:any = useContext(CartContext)

    const toggleDropdown = () => setIsCartOpen(!isCartOpen)
   
    return (
        <div className="cart-icon-container" onClick={ toggleDropdown}>
            <FaShoppingBasket className="cart-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    )
}