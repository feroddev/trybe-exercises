const readFileTalkers = require('../utils/readFileTalkers');

const getSearchQ = async (req, res, next) => {
  const { q, rate, date } = req.query;
  if (!rate && !date) {
    const talkers = await readFileTalkers();
    const talke = talkers.filter((talk) => talk.name.includes(q));
    return res.status(200).json(talke);
  } 
  next();
};

module.exports = {
  getSearchQ,
};