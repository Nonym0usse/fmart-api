/*
 * Filename: /Users/vellacyril/Desktop/node-express-firebase/routes/product-routes.js
 * Path: /Users/vellacyril/Desktop/node-express-firebase
 * Created Date: Sunday, August 22nd 2021, 7:36:23 pm
 * Author: VELLA CYRIL
 * 
 * Copyright (c) 2021 Your Company
 */

const express = require('express');
const {addProduct, getAllProducts, getOneProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const router = express.Router();

router.post('/product', addProduct);
router.get('/products', getAllProducts);
router.get('/product/:id', getOneProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);


module.exports = {
    routes: router
}