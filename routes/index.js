'use strict'

const express = require('express')

/* Controllers */
const productCtrl = require('../controllers/product')

/* Login */
const api = express.Router()

/* Person */
api.get('/product', productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', productCtrl.saveProduct)
api.put('/product/:productId', productCtrl.updateProduct)
api.delete('/product/:productId', productCtrl.deleteProduct)


module.exports = api
