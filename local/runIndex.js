const stripe = Stripe("pk_test_51QpaRRKQPBMqH0dwdewJv5Wv7aP4zPUncD7my8vB7ZQVUF0UscNIVDkj1gcWW0jcBvdMq16u7fsuI1INRlFLOWbC00G35AAsQp");


document.getElementById("donate").addEventListener("click", async () => {
    const res = await fetch("http://localhost:5432/creat-payment-intent", { method: "POST" });

    const { clientSecret } = await res.json();
})