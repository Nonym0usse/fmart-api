/*
 * Filename: /Users/vellacyril/Desktop/node-express-firebase/controllers/studentController.js
 * Path: /Users/vellacyril/Desktop/node-express-firebase
 * Created Date: Sunday, August 22nd 2021, 2:33:49 pm
 * Author: VELLA CYRIL
 * 
 * Copyright (c) 2021 Your Company
 */

'use strict';

const firebase = require('../db');
const User = require('../models/user');
const firestore = firebase.firestore();


const addUser = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('user').doc().set(data);
        res.send('Product successfully added in database');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllUser = async (req, res, next) => {
    try {
        const user = await firestore.collection('user');
        const data = await user.get();
        const userArray = [];
        if(data.empty) {
            res.status(404).send('No users record found');
        }else {
            data.forEach(doc => {
                const user = new User(
                    doc.uid,
                    doc.data().title,
                    doc.data().description,
                    doc.data().quantity,
                    doc.data().expiration_date,
                    doc.data().creation_date,
                    doc.data().unit_price,
                    doc.data().review_user,
                    doc.data().weight,
                    doc.data().provider_id,
                );
                userArray.push(user);
            });
            res.send(userArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getOneUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await firestore.collection('user').doc(id);
        const data = await user.get();
        if(!data.exists) {
            res.status(404).send('== User with the given ID not found ==');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const user =  await firestore.collection('user').doc(id);
        await user.update(data);
        res.send('User record updated successfully');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('user').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addUser,
    getAllUser,
    getOneUser,
    updateUser,
    deleteUser
}