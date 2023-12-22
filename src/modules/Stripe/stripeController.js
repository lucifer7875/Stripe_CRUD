const stripeUtils = require('./stripeUtils');

exports.createCustomer = async (req, res) => {
    try {
        const result = await stripeUtils.createCustomer(req);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};
exports.getCustomer = async (req, res) => {
    try {
        const result = await stripeUtils.getCustomer(req);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};
exports.getCustomerById = async (req, res) => {
    try {
        const result = await stripeUtils.getCustomerById(req);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};
exports.getProduct = async (req, res) => {
    try {
        const result = await stripeUtils.getProduct(req);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};
exports.createSubscription = async (req, res) => {
    try {
        const result = await stripeUtils.createSubscription(req);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};
exports.getSubscriptionByCustomerId = async (req, res) => {
    try {
        const result = await stripeUtils.getSubscriptionByCustomerId(req);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};
exports.updateSubscription = async (req, res) => {
    try {
        const result = await stripeUtils.updateSubscription(req);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};
exports.cancelSubscription = async (req, res) => {
    try {
        const result = await stripeUtils.cancelSubscription(req);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

