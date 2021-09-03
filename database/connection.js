var dotenv = require('dotenv')
var config = require('../database/databaseConfig')


const knex = require('knex');

dotenv.config();

let connection = knex(config.config);

module.exports = connection;
