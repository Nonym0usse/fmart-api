/*
 * Filename: /Users/vellacyril/Desktop/node-express-firebase/routes/user-routes.js
 * Path: /Users/vellacyril/Desktop/node-express-firebase
 * Created Date: Sunday, August 22nd 2021, 2:33:49 pm
 * Author: VELLA CYRIL
 * 
 * Copyright (c) 2021 Your Company
 */

const express = require('express');
const {addUser, getAllUser, getOneUser, updateUser, deleteUser } = require('../controllers/userController');

const router = express.Router();

router.post('/user', addUser);
router.get('/users', getAllUser);
router.get('/user/:id', getOneUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);


module.exports = {
    routes: router
}