// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    getFolderPath: () => ipcRenderer.invoke('get-folder-path'),
    setFolderPath: (path) => ipcRenderer.invoke('set-folder-path', path),
    selectFolder: () => ipcRenderer.invoke('select-folder'),
    createFolder: (folderName) => ipcRenderer.invoke('create-folder', folderName),
    getSubFolders: () => ipcRenderer.invoke('get-subfolders'),
    searchFolder: (search) => ipcRenderer.invoke('search-folder', search),
    createFile: (fileName, content) => ipcRenderer.invoke('create-file', fileName, content),
});