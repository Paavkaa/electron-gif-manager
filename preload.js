// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    getFolderPath: () => ipcRenderer.invoke('get-folder-path'),
    setFolderPath: (path) => ipcRenderer.invoke('set-folder-path', path),
    checkFolder: (path) => ipcRenderer.invoke('check-folder', path),
    createFolder: (path) => ipcRenderer.invoke('create-folder', path),
    getFiles: (path) => ipcRenderer.invoke('get-files', path),
});