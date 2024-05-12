const express = require('express');
//const user = require('../router/user')
const alexa = require('../router/alexa');

module.exports = function(app){
    app.use(express.json());
   // app.use('/api/user', user);
   app.use('/api/axa,', alexa);
}