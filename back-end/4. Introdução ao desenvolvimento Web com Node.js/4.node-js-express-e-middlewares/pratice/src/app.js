const express = require("express");
require("express-async-errors");
const morgan = require('morgan');
const teamsRouter = require('./routes/teamsRouter')

const apiCredentials = require("./middlewares/apiCredentials");

const app = express();

app.use(apiCredentials);
app.use(express.json());
app.use(morgan('dev'));

app.use('/teams', teamsRouter);

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

module.exports = app;
