const { app, BrowserWindow } = require('electron')
const patch = require('path')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: patch.join(__dirname, 'preload.js')
        }
    });

    mainWindow.loadFile(patch.join(__dirname, 'render/index.html'))
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})