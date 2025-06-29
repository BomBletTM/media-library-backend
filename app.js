const express = require("express");
const app = express();
const port = 3000;

const library = require("./Library");

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Library!",
  });
});

app.get("/movies", (req, res) => {
  const movies = library.getAllMovies().map((movie) => movie.getDetails());
  res.status(200).json({
    movies: movies,
  });
});

app.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = library.getMovieById(id);
  if (movie) {
    res.status(200).json({movie: movie.getDetails()});
  } else {
    res.status(404).json({ error: "Movie not found" });
  }
});