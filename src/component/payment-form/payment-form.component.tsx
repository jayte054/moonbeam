import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import React from "react"
import { Button, BUTTON_TYPES_CLASS } from "../button/button.component"
import "./payment-form.styles.scss"

const PaymentForm = () => {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = (e:any) => {
        e.preventDefault()
        if(!stripe || elements){
            return
        }
        console.log("payment")
    }

    return(
        <div className="payment-form-container">
            <h2>Credit Card Payment</h2>
            <div className="form-container">
            <CardElement />
            <Button buttonType={BUTTON_TYPES_CLASS.inverted} onClick={handleSubmit}>Pay Now</Button>
            </div>  
        </div>
    )
}

export default PaymentForm