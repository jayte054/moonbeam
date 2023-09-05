import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import React from "react"
import { Button, BUTTON_TYPES_CLASS } from "../button/button.component"
import "./payment-form.styles.scss"

const PaymentForm = () => {
    const stripe = useStripe()
    const elements = useElements()

    const handlePayment = async(e:any) => {
        console.log("here")
        e.preventDefault()
        if(!stripe || elements){
            return
        }
        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({amount: 10111})
        })

        console.log(response)
    }

    return(
        <div className="payment-form-container">
            <h2>Credit Card Payment</h2>
            <div className="form-container">
            <CardElement />
            <Button type="button" buttonType={BUTTON_TYPES_CLASS.inverted} onClick={handlePayment}>Pay Now</Button>
            </div>  
        </div>
    )
}

export default PaymentForm