const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const verifyToken = require('../middleware/authMiddleware')

router.get('/documents/:documentId/comments', verifyToken, commentController.getCommentsByDocument);

router.post('/documents/:documentId/comment', verifyToken, commentController.addCommentsToDocument);

module.exports = router;