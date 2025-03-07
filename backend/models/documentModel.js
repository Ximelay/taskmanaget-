const db = require('./authModel');

const getDocuments = async () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM documents';
        db.query(query, (err, result) => {
            if(err) reject(err);
            resolve(result)
        })
    })
}

module.exports = getDocuments();