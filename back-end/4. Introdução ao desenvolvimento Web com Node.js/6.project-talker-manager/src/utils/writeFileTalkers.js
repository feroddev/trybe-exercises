const fs = require('fs').promises;
const path = require('path');

const writeFileTalkers = async (talkers) => {
  const data = JSON.stringify(talkers);
  const filePath = path.join(__dirname, '..', 'talker.json');
  await fs.writeFile(filePath, data);
};

module.exports = writeFileTalkers;