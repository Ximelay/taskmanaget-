const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    // Пример: функция для отправки данных из рендеринга в основной процесс
    sendDataToMain: (data) => ipcRenderer.send('send-to-main', data),
    // Пример: получение ответа от основного процесса
    onDataReceived: (callback) => ipcRenderer.on('data-from-main', callback)
});
