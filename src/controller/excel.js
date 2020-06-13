const getExcel = (req, res, next) => {
  res.status(200).send('hello world');
};

const postExcel = (req, res, next) => {
  res.send('upload complete');
};

module.exports = {
  getExcel,
  postExcel,
};
