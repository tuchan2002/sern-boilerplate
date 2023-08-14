const express = require('express');
const messageRoute = require('./messageRoute');

const appRoute = express();

appRoute.use('/messages', messageRoute);

module.exports = appRoute;
