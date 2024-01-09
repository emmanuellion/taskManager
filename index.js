const { app, BrowserWindow } = require('electron');
const {readFileSync, writeFileSync} = require('fs');

if (require('electron-squirrel-startup')) {
    app.quit();
}

const indexPath = "./build/index.html"

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: 'public/assets/logo/icon.png'
    });

    const data = readFileSync(indexPath, 'utf-8');
    if(data.indexOf("./static")){
        const newData = data.replace('/static', './static');
        writeFileSync(indexPath, newData, 'utf-8');
    }

    win.loadFile(indexPath).then(() => {
        console.log("file loaded")
    })
}

app.whenReady().then(() => {
    createWindow()
});

app.on('window-all-closed', () => {
    app.quit()
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0)
        createWindow();
});