const express = require('express');
const multer = require('multer');

const { getExcel, postExcel } = require('../controller/excel');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, 'excel-database.xlsx');
  },
});
const upload = multer({ storage: storage });

// GET /excel/
router.get('/', getExcel);

// POST /excel/
router.post('/', upload.single('excel'), postExcel);

module.exports = router;
