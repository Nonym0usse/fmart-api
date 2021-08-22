/*
 * Filename: /Users/vellacyril/Desktop/node-express-firebase/controllers/productController.js
 * Path: /Users/vellacyril/Desktop/node-express-firebase
 * Created Date: Sunday, August 22nd 2021, 7:37:25 pm
 * Author: VELLA CYRIL
 * 
 * Copyright (c) 2021 Your Company
 */

'use strict';

const firebase = require('../db');
const Product = require('../models/product');
const firestore = firebase.firestore();


const addProduct = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('products').doc().set(data);
        res.send('Product successfully added in database');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllProducts = async (req, res, next) => {
    try {
        const products = await firestore.collection('products');
        const data = await products.get();
        const productsArray = [];
        if(data.empty) {
            res.status(404).send('No products record found');
        }else {
            data.forEach(doc => {
                const product = new Product(
                    doc.uid,
                    doc.data().title,
                    doc.data().description,
                    doc.data().quantity,
                    doc.data().expiration_date,
                    doc.data().creation_date,
                    doc.data().phoneNumber,
                    doc.data().unit_price,
                    doc.data().review_user,
                    doc.data().weight,
                    doc.data().provider_id
                );
                productsArray.push(product);
            });
            res.send(productsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getOneProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await firestore.collection('products').doc(id);
        const data = await product.get();
        if(!data.exists) {
            res.status(404).send('Product with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const product =  await firestore.collection('products').doc(id);
        await product.update(data);
        res.send('Product record updated successfully');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('products').doc(id).delete();
        res.send('Record deleted successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
}