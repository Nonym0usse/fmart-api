/*
 * Filename: /Users/vellacyril/Desktop/node-express-firebase/index.js
 * Path: /Users/vellacyril/Desktop/node-express-firebase
 * Created Date: Sunday, August 22nd 2021, 2:33:49 pm
 * Author: VELLA CYRIL
 * 
 * Copyright (c) 2021 Your Company
 */

'use strict';
const express = require('express');
const cors = require('cors');
const config = require('./config');
const userRoutes = require('./routes/user-routes');
const login = require('./routes/login-routes');
const products = require('./routes/product-routes');

const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(cors());

app.use('/api-user', userRoutes.routes);


/* LOGIN WITH KAKAO */

app.use('/api-login', login.routes);

/* PRODUCTS */

app.use('/api-products', products.routes);


app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));
