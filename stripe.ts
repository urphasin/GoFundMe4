import "dotenv/config";
import express from "express";
import cors from "cors";
import { log } from "console";
import Stripe from "stripe";


const app = express();
const PORT = 5432;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// console.log(stripe);

// middleware
app.use(cors());
app.use(express.json());



/**
 * ROUTE: Create PaymentIntent
 */
const paymentIntent = await stripe.paymentIntents.create({
    amount: 100,
    currency: "usd"
});

log(paymentIntent.client_secret);
