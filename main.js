const { app, BrowserWindow, dialog } = require('electron');
const path = require('path');
const { setupFileHandlers } = require('./src/ipc/folderHandlers');
const Store = require('electron-store');

const isDev = process.env.NODE_ENV === 'development';

const store = new Store();

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        },
    });

    if (isDev) {
        win.loadURL('http://localhost:3000');
        win.webContents.openDevTools();
    } else {
        win.loadFile(path.join(__dirname, 'dist', 'index.html'));
    }
}

function initialize() {
    createWindow();
    setupFileHandlers();
    setupFileHandlers();
}

app.whenReady().then(initialize);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        initialize();
    }
});