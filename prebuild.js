// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    checkFolder: (path) => ipcRenderer.invoke('check-folder', path),
    createFolder: (path) => ipcRenderer.invoke('create-folder', path),
    getFiles: (path) => ipcRenderer.invoke('get-files', path),
});