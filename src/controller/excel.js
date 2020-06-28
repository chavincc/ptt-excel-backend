const path = require('path');
const multer = require('multer');

const getExcel = (req, res, next) => {
  res.download(path.join(__dirname, '../../uploads', 'excel-database.xlsx'));
};

const postExcel = (req, res, next) => {
  console.log(req.file);
  res.send('upload complete');
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, 'excel-database.xlsx');
  },
});
const uploadExcel = multer({ storage: storage });

module.exports = {
  getExcel,
  postExcel,
  uploadExcel
};
