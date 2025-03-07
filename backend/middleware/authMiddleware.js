const jwt = require('jwt-simple');

// Middleware для проверки токена
const verifyToken = (req, res, next) => {
    // Получаем токен из заголовков запроса
    const token = req.headers['authorization'];

    // Если токен отсутствует, отправляем ошибку
    if (!token) {
        return res.status(403).json({ message: 'Токен не предоставлен' });
    }

    try {
        // Декодируем токен с использованием секретного ключа
        const decoded = jwt.decode(token, process.env.JWT_SECRET);
        req.user = decoded.user;  // Добавляем информацию о пользователе в запрос
        next();  // Переходим к следующему middleware или маршруту
    } catch (err) {
        return res.status(403).json({ message: 'Неверный токен' });
    }
};

module.exports = verifyToken;  // Экспортируем именно функцию
