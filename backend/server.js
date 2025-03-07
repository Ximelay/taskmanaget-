const express = require('express');  // Подключаем express
const bodyParser = require('body-parser');  // Подключаем bodyParser для обработки JSON
const dotenv = require('dotenv');  // Подключаем dotenv для использования переменных окружения

dotenv.config();  // Загружаем переменные окружения из .env

const app = express();  // Создаем экземпляр express-приложения

// Применяем middleware для обработки JSON
app.use(bodyParser.json());

// Маршруты
const authRoutes = require('./routes/authRoutes');
const documentRoutes = require('./routes/documentRoutes');
const commentRoutes = require('./routes/commentRoutes');

// Применяем маршруты к пути '/api/v1'
app.use('/api/v1', authRoutes);
app.use('/api/v1', documentRoutes);
app.use('/api/v1', commentRoutes);

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
