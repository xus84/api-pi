const { Router } = require('express')
const router = Router();


const prodCtrller = require('../controllers/products.controllers.js')

router.get('/products', prodCtrller)

module.exports = router;