const connection = require('./connection');

const findAll = async () => {
  const [drivers] = await connection.execute('SELECT * FROM drivers');
  return drivers;
};

const findById = async (driverId) => {
  const [[driver]] = await connection.execute('SELECT * FROM drivers WHERE id = ?', [driverId]);
  return driver;
};

const insert = async ({ name }) => {
  const [{ insertId }] = await connection.execute('INSERT INTO drivers (name) VALUE (?)', [name]);
  return insertId;
};

module.exports = {
  findAll,
  findById,
  insert,
};