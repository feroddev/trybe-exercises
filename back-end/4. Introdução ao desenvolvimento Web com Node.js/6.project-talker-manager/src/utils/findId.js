const readFileTalkers = require('./readFileTalkers');

const nextId = async () => {
  const talkers = await readFileTalkers();
  const lastTalker = talkers[talkers.length - 1];
  return lastTalker.id + 1;
};

module.exports = nextId;