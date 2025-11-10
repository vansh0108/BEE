const router = require('express').Router();
// controller lives in api/controller relative to this file
const { placeOrder } = require('../controller/order_v2');

router.post('/', placeOrder);

module.exports = router;