const express = require('express');

const { queryProgress } = require('../controllers/progress');

const progressRoutes = express.Router();

progressRoutes.get('/', queryProgress);

module.exports = {
  progressRoutes,
};
