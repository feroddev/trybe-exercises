const { Router } = require('express');
const readFileTalkers = require('../utils/readFileTalkers');
const { validAuthorisation } = require('../middleware/validPostTalker');
const writeFileTalkers = require('../utils/writeFileTalkers');
const validRate = require('../middleware/validRate');

const talkerRateRouter = Router();

talkerRateRouter.patch('/:id', validAuthorisation, validRate, async (req, res) => {
  const { id } = req.params;
  const { rate } = req.body;
  if (!rate) {
    return res.status(400).json({
      message: 'O campo "rate" é obrigatório',
    });
  }
  const talkers = await readFileTalkers();
  const index = talkers.findIndex((talk) => talk.id === Number(id));
  talkers[index].talk.rate = rate;
  const talke = talkers[index];
  await writeFileTalkers(talkers);
  return res.status(204).json(talke);
});

module.exports = talkerRateRouter;