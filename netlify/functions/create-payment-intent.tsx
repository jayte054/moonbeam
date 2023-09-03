import * as dotenv from "dotenv"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

dotenv.config()

exports.handler = async (e: any) => {
    try{
        const {amount} = JSON.parse(e.body)

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payment_method_types: ["card"]
        })

        return {
            statusCode: 200,
            body: JSON.stringify({paymentIntent})
        }
    }catch(error){
        console.log(error)

        return{
            statusCode: 400,
            body: JSON.stringify({error})
        }
    }
}