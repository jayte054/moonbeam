import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import { Button } from "../button/button.component"
import { CartItem } from "../cart-item/cart-item.component"
import "./cart-dropdown.styles.scss"

export const CartDropdown = () => {
    const {cartItems} = useContext<any>(CartContext)
    
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item : any) => <CartItem key = {item.id} cartItem={item} /> )}           
            </div>
            <Button>Checkout</Button>
        </div>
    )
}