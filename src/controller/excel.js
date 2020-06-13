const getExcel = (req, res, next) => {
  res.status(200).send('hello world');
};

const postExcel = (req, res, next) => {
  console.log(req.body);
  // const excelFile = req.file;
  // console.log(excelFile);
};

module.exports = {
  getExcel,
  postExcel,
};
