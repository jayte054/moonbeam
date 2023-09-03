import {useContext} from "react"
import CheckoutItem from "../../component/checkout-item/checkout-item.component"
import PaymentForm from "../../component/payment-form/payment-form.component"
import { CartContext } from "../../context/cart-context"
import "./checkoutpage.styles.scss"

export const CheckoutPage = () => {
    const {cartItems, cartTotal} = useContext<any>(CartContext)

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>name</span>
                </div>
                <div className="header-block">
                    <span>quanity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            <div>
                {cartItems.map((cartItem: any) => 
                  <CheckoutItem key={cartItem.id} cartItem = {cartItem} />
                )}
            <span className="total">Total:  ₦{cartTotal}</span>
            <PaymentForm />
            </div>
        </div>
    )
}