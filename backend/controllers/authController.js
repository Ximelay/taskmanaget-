const jwt = require('jwt-simple');
const db = require('../models/authModel')

const signIn = async (req, res) => {
    try {
        const {name, password} = req.body;

        const query = 'SELECT * FROM employees WHERE name = ? and password = ?';
        db.query(query, [name, password], (err, result) => {
            if(err) {
                return res.status(500).json({ message: 'Ошибка при авторизации' })
            }

            if(result.length > 0) {
                const payload = { user: name};
                const token = jwt.encode(payload, process.env.JWT_SECRET);
                return res.json({ token });
            } else {
                return res.status(403).json({ message: 'Неправильные данные для входа'})
            }
        });
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Ошибка при выполнении запроса'})
    }
}

module.exports = {
    signIn
}