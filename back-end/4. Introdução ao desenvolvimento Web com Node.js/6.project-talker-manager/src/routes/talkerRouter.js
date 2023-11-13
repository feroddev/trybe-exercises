const { Router } = require('express');
const readFileTalkers = require('../utils/readFileTalkers');
const validId = require('../middleware/validId');
const writeFileTalkers = require('../utils/writeFileTalkers');
const { validPostTalker,
  validAuthorisation,
} = require('../middleware/validPostTalker');
const nextId = require('../utils/findId');
const validPutTalker = require('../middleware/validPutTalker');

const talker = Router();

talker.get('/', async (_req, res) => {
  const talkers = await readFileTalkers();
  res.status(200).json(talkers);
});

talker.post('/', validPostTalker, async (req, res) => {
  const { name, age, talk } = req.body;
  const id = await nextId();
  const newTalker = { name, age, id, talk };
  const talkers = await readFileTalkers();
  talkers.push(newTalker);
  await writeFileTalkers(talkers);
  res.status(201).json(newTalker);
});

talker.get('/:id', validId, async (req, res) => {
  const id = Number(req.params.id);
  const talkers = await readFileTalkers();
  const talk = talkers.find((perso) => perso.id === id);
  res.status(200).json(talk);
});

talker.put('/:id', validPostTalker, validPutTalker, async (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;
  const talkers = await readFileTalkers();
  const updateTalker = { id, ...data };
  const index = talkers.findIndex((talk) => talk.id === id);
  talkers[index] = updateTalker;
  await writeFileTalkers(talkers);
  res.status(200).json(updateTalker);
});

talker.delete('/:id', validAuthorisation, async (req, res) => {
  const id = Number(req.params.id);
  const talkers = await readFileTalkers();
  const newTalkers = talkers.filter((talk) => talk.id !== id);
  await writeFileTalkers(newTalkers);
  res.status(204).end();
});

module.exports = talker;