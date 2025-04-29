const express = require('express');
const router = express.Router();
const { procesarPost } = require('../controllers/procesarController');

// POST /api/procesar
router.post('/procesar', procesarPost);

module.exports = router;
