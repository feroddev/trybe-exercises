const readFileTalkers = require('../utils/readFileTalkers');

const validId = async (req, res, next) => {
  const { id } = req.params;
  const talkers = await readFileTalkers();
  const talker = talkers.find((talk) => talk.id === Number(id));
  if (!talker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  next();
};

module.exports = validId;