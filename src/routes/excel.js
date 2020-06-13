const express = require('express');

const { getExcel, postExcel } = require('../controller/excel');

const router = express.Router();

// GET /excel/
router.get('/', getExcel);

// POST /excel/
router.post('/', postExcel);

module.exports = router;
