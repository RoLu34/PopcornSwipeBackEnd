const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT;

// Routes
const MovieRoutes = require('./routes/movie.routes.js');

app.use('/movies', MovieRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});