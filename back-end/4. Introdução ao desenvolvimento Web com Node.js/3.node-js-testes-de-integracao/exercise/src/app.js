const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();

app.listen(3001, () => console.log('Ouvindo a porta 3001'));

app.get('/chocolates', async function(req, res) {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async function(req, res) {
  const allChocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ totalChocolates: allChocolates.length })
})

app.get('/chocolates/search', async function(req, res) {
  const {name} = req.query;
  const allChocolates = await cacauTrybe.getAllChocolates();
  const filteredChocolates = allChocolates.filter((chocolate) => chocolate.name.includes(name));
  if(filteredChocolates.length === 0) {
    return res.status(404).json([]);
  }
  return res.status(200).json(filteredChocolates);
})


app.get('/chocolates/brand/:brandId', async function(req, res) {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.get('/chocolates/:id', async function(req, res) {
  const { id } = req.params;
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  if(!chocolate) return res.status(404).json({message: 'Chocolate not found'})
  res.status(200).json({chocolate});
})

module.exports = app;
