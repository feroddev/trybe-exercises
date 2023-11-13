const fs = require('fs').promises;
const path = require('path');

const pathFile = path.join(__dirname, '..', 'talker.json');

const readFileTalkers = async () => {
  const data = await fs.readFile(pathFile, 'utf-8');
  const talkers = JSON.parse(data);
  return talkers;
};

module.exports = readFileTalkers;