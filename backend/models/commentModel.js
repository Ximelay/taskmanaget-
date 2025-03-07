const db = require('./authModel')

const getComments = async (documentId) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM comments WHERE document_id = ?';
        db.query(query, [documentId], (err, result) => {
            if(err) throw reject(err)
            resolve(result)
        })
    })
}

const addComments = async (documentId, text, authorName, authorPosition) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO comments (document_id, text, author_name, author_position) VALUE (?, ?, ?, ?)';
        db.query(query, [documentId, text, authorName, authorPosition], (err, result) => {
            if(err) reject(err);
            resolve(result)
        })
    })
}

module.exports = {
    getComments,
    addComments
}