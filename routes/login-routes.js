/*
 * Filename: /Users/vellacyril/Desktop/node-express-firebase/routes/login-routes.js
 * Path: /Users/vellacyril/Desktop/node-express-firebase
 * Created Date: Sunday, August 22nd 2021, 3:05:57 pm
 * Author: VELLA CYRIL
 * 
 * Copyright (c) 2021 Your Company
 */

const express = require('express');
const { userLogin } = require('../controllers/loginController');

const router = express.Router();

router.post('/login', userLogin);


module.exports = {
  routes: router
}