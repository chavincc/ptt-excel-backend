const express = require('express');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const { progressRoutes } = require('./routes/progress');

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/progress', progressRoutes);
app.get('/', (req, res, next) => {
  res.send('ptt construction monitoring REST server');
});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

module.exports = {
  app,
  server,
};
