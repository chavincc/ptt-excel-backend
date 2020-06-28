const express = require('express');

const { getExcel, postExcel, uploadExcel } = require('../controller/excel');

const router = express.Router();

// GET /excel/
router.get('/', getExcel);

// POST /excel/
router.post('/', uploadExcel.single('excel'), postExcel);

module.exports = router;
