const getDocuments = require('../models/documentModel')

const getAllDocuments = async (req, res) => {
    try {
        const documents = await getDocuments();
        if(documents.length === 0) {
            return res.status(404).json({ message: 'Документы не найдены'})
        }
        res.status(200).json(documents);
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Ошибка при получении документов', error: err })
    }
}

module.exports = {
    getAllDocuments
}