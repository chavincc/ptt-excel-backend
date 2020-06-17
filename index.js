const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const excelRoutes = require('./src/routes/excel');
const authRoutes = require('./src/routes/auth')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/excel', excelRoutes);
app.use('/auth', authRoutes);
app.get('/', (req, res, next) => {
  res.send('ptt excel service server')
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
