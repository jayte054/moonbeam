import { Button } from "../button/button.component"
import "./cart-dropdown.styles.scss"

export const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items"/>
            <Button>Go to Checkout</Button>
        </div>
    )
}