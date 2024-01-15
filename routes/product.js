const express = require('express')
const productController = require('../Controller/product')
const router = express.Router()


router
.post('/', productController.create_product)
.get('/', productController.get_All_Products)
.get('/:id', productController.get_id_product)
.put('/:id', productController.update_products)
.patch('/:id', productController.update_id_product)
.delete('/:id', productController.delete_product)


exports.routes = router

