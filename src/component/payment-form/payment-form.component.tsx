// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
// import React from "react"
// import { Button, BUTTON_TYPES_CLASS } from "../button/button.component"
// import "./payment-form.styles.scss"

// const PaymentForm = () => {
//     const stripe: any = useStripe()
//     const elements: any = useElements()

//     const handlePayment = async(e: any) :Promise<any>=> {
//         console.log("here")
//         console.log("hereee")
//         e.preventDefault()
//         if(!stripe || !elements){
//             return;
//         }
//         console.log("return")
//         try{
//             console.log("response")
//             const response = await fetch("/.netlify/functions/create-payment-intent", {
//                 method: "post",
//                 headers: {
//                     "content-type": "application/json"
//                 },
//                 body: JSON.stringify({amount: 10111})
//             }).then(res => res.json())
    
//             console.log(await response)
            
//             if (response.status === 200) {
//                  await stripe.confirmCardPayment(response.clientSecret, {
//                   payment_method: {
//                     card: elements.getElement(CardElement),
//                   },
//                 });

//         }}catch(error){
//             console.log("error fetching data", {error})
//         }
       
//     }

//     return(
//         <div className="payment-form-container">
//             <h2>Credit Card Payment</h2>
//             <div className="form-container">
//             <CardElement />
//             <Button type="button" buttonType={BUTTON_TYPES_CLASS.inverted} onClick={handlePayment}>Pay Now</Button>
//             </div>  
//         </div>
//     )
// }

// export default PaymentForm

// PaymentForm.js
// import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button, BUTTON_TYPES_CLASS } from "../button/button.component";

const PaymentForm = () => {
  const stripe: any = useStripe();
  const elements: any = useElements();
//   const [error, setError] = useState<any>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Create a payment intent on your serverless function
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 1000 }), // Replace with your desired amount
    }).then(res => res.json())
    console.log(await response)

    // const clientSecret: string = await response.paymentIntent.client_secret

    // console.log(await (response.paymentIntent.clientSecret).json())

    const {paymentIntent : {client_secret}} = response


    console.log(client_secret)
    console.log("paymentResult")

    // try{
    //   console.log("paymentResult")
    //   const paymentResult = await stripe.confirmCardPayment(client_secret, {
    //     payment_method: {
    //       card : elements.getElement(CardElement),
    //       billingDetails: {
    //           name: "justin"
    //       }}
    //   })
    // console.log("successful", paymentResult)
    // }catch(error){
    //   console.log("unsuccessful:", error)
    // }

    try{
      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "justin"
          }
        }
      })
  
      if(paymentResult.error){
          window.alert(paymentResult.error)
      }else{
          if(paymentResult.paymentIntent.statusCode === 200){
              window.alert("payment successful")
              console.log("payment successful")
          }
      }
    }catch(error){
      console.log(error)
    }
    
    console.log("done")
 };

  return (
    // <form onSubmit={handleSubmit}>
    //   <CardElement />
    //   <button type="submit">Pay Now</button>
    //   {error && <div>{error}</div>}
    // </form>

    <div className="payment-form-container">
                 <div className="form-container">
                     <h2>Credit Card Payment</h2>
        <CardElement />
        <Button type="submit" buttonType={BUTTON_TYPES_CLASS.inverted} onClick={handleSubmit}>Pay Now</Button>
        </div>
    </div>
  );
};

export default PaymentForm;
