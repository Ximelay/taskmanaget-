const { getComments, addComments } = require('../models/commentModel')

const getCommentsByDocument = async (req, res) => {
    try {
        const { documentId } = req.params;

        const comments = await getComments(documentId);
        if(!comments || comments.length === 0) {
            return res.status(404).json({ message: 'Комментарии не найдены для документа', errorCode: '2344'})
        }
        res.status(200).json(comments);
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Ошибка при получении комментариев', error: err })
    }
}

const addCommentsToDocument = async (req, res) => {
    try {
        const documentId = req.params;
        const { text, author } = req.params;

        const newComment = await addComments(documentId, text, author.name, author.position);
        res.status(201).json({ message: 'Комментарий добавлен', data: newComment })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Ошибка при добавлении комментария', error: err })
    }
}

module.exports = {
    getCommentsByDocument,
    addCommentsToDocument
}