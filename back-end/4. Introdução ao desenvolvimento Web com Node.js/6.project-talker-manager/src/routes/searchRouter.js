const { Router } = require('express');
const readFileTalkers = require('../utils/readFileTalkers');
const { validAuthorisation } = require('../middleware/validPostTalker');
const validSearch = require('../middleware/validSearch');

const talkerSearchRouter = Router();

talkerSearchRouter.get('/', validAuthorisation, validSearch, async (req, res) => {
  const { q, rate, date } = req.query;
  let talkers = await readFileTalkers();
  if (date) {
    const talke = talkers.filter((talk) => talk.talk.watchedAt === date);
    talkers = talke;
  }
  if (rate) {
    const talke = talkers.filter((talk) => talk.talk.rate === Number(rate));
    talkers = talke;
  }
  if (q) {
    const talke = talkers.filter((talk) => talk.name.includes(q));
    talkers = talke;
  }
  return res.status(200).json(talkers);
});

module.exports = talkerSearchRouter;