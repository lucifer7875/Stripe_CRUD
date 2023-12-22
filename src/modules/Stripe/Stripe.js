const express = require('express');
const router = express.Router();
const stripeController = require('./stripeController');

router.post('/create-customer', stripeController.createCustomer);
router.post('/get-customers', stripeController.getCustomer);
router.post('/get-customer/:customerId', stripeController.getCustomerById);
router.post('/get-products', stripeController.getProduct);
router.post('/subscription/:customerId', stripeController.getSubscriptionByCustomerId);
router.post('/create-subscription', stripeController.createSubscription);
router.post('/update-subscription', stripeController.updateSubscription);
router.post('/cancel-subscription', stripeController.cancelSubscription);

module.exports = router