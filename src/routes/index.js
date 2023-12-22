const express = require('express');
const router = express.Router();
const stripe = require('../modules/Stripe/Stripe')

router.use('/v1', stripe);

module.exports = router;