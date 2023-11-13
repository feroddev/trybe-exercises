const { Router } = require('express');
// const dbQuery = require('../db/dbQuery');
const connection = require('../db/connection');

const dbRouter = Router();

dbRouter.get('/', async (req, res) => {
  try {
    const query = `SELECT name, age, id,
    JSON_OBJECT('watchedAt',talk_watched_at , 'rate', talk_rate) AS talk FROM talkers;`;
    const [data] = await connection.execute(query); 
    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = dbRouter;