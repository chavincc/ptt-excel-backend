const express = require('express');
const bodyParser = require('body-parser');

const excelRoutes = require('./src/routes/excel');

const app = express();

app.use(bodyParser.json());

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
app.get('/', (req, res, next) => {
  res.send('hello world');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  try {
    console.log(`server started on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
