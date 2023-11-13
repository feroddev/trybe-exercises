const validRate = (req, res, next) => {
  const { rate } = req.body;
  const array = [1, 2, 3, 4, 5];
  if (!rate && rate !== 0) {
    return res.status(400).json({
      message: 'O campo "rate" é obrigatório',
    });
  }
  if (!array.includes(rate)) {
    return res.status(400).json({
      message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
    });
  }
  next();
};

module.exports = validRate;