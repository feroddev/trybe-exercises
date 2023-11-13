const { Router } = require('express');
const generateToken = require('../utils/generateToken');
const validEmail = require('../middleware/validEmail');
const validPassword = require('../middleware/validPassword');

const login = Router();

login.use(validEmail);
login.use(validPassword);

login.post('/', async (_req, res) => {
  res.status(200).json({ token: generateToken() });
});

module.exports = login;