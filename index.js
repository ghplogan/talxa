const express = require('express');
const config = require('config')
const logger = require('./startup/logger')
const db = require('./startup/db')

const app = express();
//db();
//
app.get('/', function(req, res){
    const {id, since, fields, anotherField} = req.query;
    res.send(req.query);
 });
require('./startup/routes')(app)

const port = process.env.PORT || config.get('port');

const server = app.listen(port, ()=>{
logger.info(`App listening port: ${port}`);
})