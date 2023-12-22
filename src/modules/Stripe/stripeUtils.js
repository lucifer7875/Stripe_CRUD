const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.createCustomer = async (req, res) => {
    async (req, res) => {
        try {
            const customer = await stripe.customers.create({
                email: req.body.email,
                name: req.body.name,
            });

            return ({ customer });
        } catch (error) {
            return ({ error: error.message });
        }
    }
}
exports.getCustomer = async (req, res) => {
    try {
        const customers = await stripe.customers.list();

        return ({ customers: customers.data });
    } catch (error) {
        return ({ error: error.message });
    }
}
exports.getCustomerById = async (req, res) => {
    try {
        const customer = await stripe.customers.retrieve(req.params.customerId);
        // List the customer's subscriptions
        const subscriptions = await stripe.subscriptions.list({
            customer: req.params.customerId,
            limit: 1, // Limit to 1 subscription (assuming you want the most recent)
        });

        // Check if the customer has a subscription
        if (subscriptions.data.length > 0) {
            const subscription = subscriptions.data[0];
            return ({ subscription, customer });
        } else {

            return ({ message: "Customer has no active subscription", customer });
        }
    } catch (error) {
        return ({ error: error.message });
    }
}
exports.getProduct = async (req, res) => {
    try {
        const products = await stripe.prices.list({
            expand: ['data.product'], // 🎉 Give me the product data too!
        })

        return ({ products: products.data });
    } catch (error) {
        return ({ error: error.message });
    }
}
exports.createSubscription = async (req, res) => {
    try {
        const subscription = await stripe.subscriptions.create({
            customer: req.body.customerId,
            items: [{ price: req.body.priceId }],
        });

        return ({ subscription });
    } catch (error) {
        return ({ error: error.message });
    }
}
exports.getSubscriptionByCustomerId = async (req, res) => {
    try {
        // List the customer's subscriptions
        const subscriptions = await stripe.subscriptions.list({
            customer: req.params.customerId,
            limit: 1, // Limit to 1 subscription (assuming you want the most recent)
        });

        // Check if the customer has a subscription
        if (subscriptions.data.length > 0) {
            const subscription = subscriptions.data[0];

            console.log('Current Subscription:', subscription);
            return ({ subscription });
        } else {
            console.log('Customer has no active subscription.');
            return ({ message: "Customer has no active subscription", data: null });
        }
    } catch (error) {
        console.error('Error retrieving subscription:', error);
        throw error;
    }
}
exports.updateSubscription = async (req, res) => {
    try {
        const subscription = await stripe.subscriptions.update(req.body.subscriptionId, {
            items: [{ id: req.body.subscriptionItemId, price: req.body.newPriceId }],
        });

        return ({ subscription });
    } catch (error) {
        return ({ error: error.message });
    }
}
exports.cancelSubscription = async (req, res) => {
    try {
        const canceledSubscription = await stripe.subscriptions.cancel(req.body.subscriptionId);
        return ({ canceledSubscription });
    } catch (error) {
        console.error('Error canceling subscription:', error);
        return ({ error: error.message });
    }
}