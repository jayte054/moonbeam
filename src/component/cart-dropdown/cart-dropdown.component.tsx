import { useContext } from "react"
import {useNavigate} from "react-router-dom"
import { CartContext } from "../../context/cart-context"
import { Button } from "../button/button.component"
import { CartItem } from "../cart-item/cart-item.component"
import "./cart-dropdown.styles.scss"

export const CartDropdown = () => {
    const {cartItems} = useContext<any>(CartContext)
    const navigate = useNavigate()

    const checkoutHandler = () => {
        navigate("/checkoutpage")
    }
    
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item : any) => <CartItem key = {item.id} cartItem={item} /> )}           
            </div>
            <Button onClick = {checkoutHandler}>Checkout</Button>
        </div>
    )
}