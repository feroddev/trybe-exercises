const validRate = (req, res, next) => {
  const { rate } = req.query;
  const array = [1, 2, 3, 4, 5];
  if (rate && !array.includes(Number(rate))) {
    return res.status(400).json({
      message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
    });
  }
  next();
};

const validDate = (req, res, next) => {
  const { date } = req.query;
  const regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (date && !regex.test(date)) {
    return res.status(400).json({
      message: 'O parâmetro "date" deve ter o formato "dd/mm/aaaa"',
    });
  }
  next();
};

const validSearch = [validRate, validDate];

module.exports = validSearch;