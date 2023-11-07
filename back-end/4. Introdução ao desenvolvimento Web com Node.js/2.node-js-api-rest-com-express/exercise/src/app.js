const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();

app.use(express.json());

const moviesPath = path.resolve(__dirname, "./movies.json");

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pode ser lido: ${error}`);
  }
};

app.get("/movies/:id", async function (req, res) {
  try {
    const movies = await readFile();
    const { id } = req.params;
    const movie = movies.find((movie) => movie.id === Number(id));
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/movies", async function (req, res) {
  try {
    const movies = await readFile();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/movies/search', async function(req, res) {
  try {
    const {q} = req.query
    const movies = await readFile();
    if (q) {
      const moviesFiltered = movies.filter(({movie}) => movie.includes(q));
      return res.status(200).json(JSON.stringify(moviesFiltered))
    }
    res.status(200).end()
  }
})

app.post("/movies", async function (req, res) {
  try {
    const { movie, price } = req.body;
    const movies = await readFile();
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, allMovies);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put("/movies/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readFile();
    const index = movies.findIndex((movie) => movie.id === Number(id));
    movies[index] = { id: Number(id), movie, price };
    const updateMovies = JSON.stringify([movies]);
    await fs.writeFile(moviesPath, updateMovies);
    res.status(200).json(movies[index]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete("/movies/:id", async function (req, res) {
  try {
    const { id } = req.body;
    const movies = await readFile();
    const newMovies = movies.filter((movie) => movie.id !== Number(id));
    await fs.writeFile(moviesPath, JSON.stringify(newMovies));
    res.status(204).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;
