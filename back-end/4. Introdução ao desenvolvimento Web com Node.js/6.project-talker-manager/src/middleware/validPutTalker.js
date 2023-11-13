const readFileTalkers = require('../utils/readFileTalkers');

const validPutTalker = async (req, res, next) => {
  const id = Number(req.params.id);
  const talkers = await readFileTalkers();
  if (!talkers.some((talker) => talker.id === id)) {
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
  }
  next();
};

module.exports = validPutTalker;