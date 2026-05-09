const router = require('express').Router();
const movieController = require('../controllers/movie.controller.js');

router.get("/", movieController.getAllMovies);

module.exports = router;