const knex = require('knex');
const configuation = require('../../knexfile');

const config = process.env.NODE_ENV == 'test' ? configuation.test : configuation.development;

const connection = knex(config);

module.exports = connection;