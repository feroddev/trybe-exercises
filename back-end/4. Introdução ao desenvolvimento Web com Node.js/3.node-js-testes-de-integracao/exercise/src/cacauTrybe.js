const fs = require('fs').promises;
const { join } = require('path');
const path = '/files/cacauTrybeFile.json';

const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacauTrybeFile = async (content) => {
  try {
    const completePath = join(__dirname, path);
    await fs.writeFile(completePath, JSON.stringify(content));
  } catch (error) {
    console.error('Erro ao salvar o arquivo: ', error.message);
  }
}

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const putChocolateById = async (id, update) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolateToUpdate = cacauTrybe.chocolates.find(
    (chocolate) => chocolate.id === id,
  );
  if (chocolateToUpdate) {
    const index = cacauTrybe.chocolates.findIndex((chocolate) => chocolate.id === id);
    cacauTrybe.chocolates[index] = {...chocolateToUpdate, ...update};
    await writeCacauTrybeFile(cacauTrybe);
    return {...chocolateToUpdate, ...update};
  }
  return false;
}

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    putChocolateById,
};