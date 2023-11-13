const conn = require('./connection');

const findAll = () => conn.execute();

module.exports = { findAll };