const path = require('path');

const getExcel = (req, res, next) => {
  res.download(path.join(__dirname, '../../uploads', 'excel-database.xlsx'));
};

const postExcel = (req, res, next) => {
  res.send('upload complete');
};

module.exports = {
  getExcel,
  postExcel,
};
