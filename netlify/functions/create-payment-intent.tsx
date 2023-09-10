// require("dotenv").config();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

// // dotenv.config()

// exports.handler = async (event: any) => {
//     console.log('handler')
//     try{
//         const {amount} = JSON.parse(event.body)

//         const paymentIntent = await stripe.paymentIntents.create({
//             amount,
//             currency: "usd",
//             payment_method_types: ["card"]
//         })

//         return {
//             statusCode: 200,
//             body: JSON.stringify({clientSecret: paymentIntent.client_secret})
//         }
//     }catch(error){
//         console.log(error)

//         return{
//             statusCode: 400,
//             body: JSON.stringify({error})
//         }
//     }
// }

// create-payment-intent.js
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({  paymentIntent }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
