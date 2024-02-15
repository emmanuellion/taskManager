const { app, BrowserWindow } = require('electron');

if (require('electron-squirrel-startup')) {
    app.quit();
}

let win;

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: 'public/assets/logo/icon.png',
        center: true,
        vibrancy: 'under-window',
        webPreferences: {
            nodeIntegration: true,
        },
    });

    const startUrl = 'http://localhost:3000';

    win.loadURL(startUrl);

    win.on('closed', () => {
        win = null;
    });

    // Add this line to allow communication between Electron and React
    win.webContents.on('did-finish-load', () => {
        win.webContents.send('electron-ready');
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});