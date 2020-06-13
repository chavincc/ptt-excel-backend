const express = require('express');

const { getExcel } = require('../controller/excel');

const router = express.Router();

// GET /excel/
router.get('/', getExcel);

module.exports = router;
