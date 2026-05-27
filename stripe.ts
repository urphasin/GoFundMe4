import "dotenv/config";
import { log } from "console";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// const paymentIntent = await stripe.paymentIntents.create({});

