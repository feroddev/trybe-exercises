const express = require('express');
const talkerRouter = require('./routes/talkerRouter');
const loginRouter = require('./routes/loginRouter');
const searchRouter = require('./routes/searchRouter');
const rateRouter = require('./routes/rateRouter');
const dbRouter = require('./routes/dbRouter');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log(`Tamo ON na porta ${PORT}!! 🚀`);
});

app.use('/talker/search', searchRouter);
app.use('/talker/rate', rateRouter);
app.use('/talker/db', dbRouter);
app.use('/talker', talkerRouter);
app.use('/login', loginRouter);