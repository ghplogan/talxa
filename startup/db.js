const mongoose = require('mongoose')
const logger = require('../startup/logger')
const config = require('config');

module.exports = function(){
    const db = config.get('db');
    mongoose.connect(db, ()=>{
        logger.info('db connected');
    })
}
