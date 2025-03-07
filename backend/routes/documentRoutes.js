const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController')
const verifyToken = require('../middleware/authMiddleware');  // Подключаем middleware

router.get('/documents', verifyToken, documentController.getAllDocuments);

module.exports = router;