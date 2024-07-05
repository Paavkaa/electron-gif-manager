const { ipcMain, dialog } = require('electron');
const fs = require('fs');
const Store = require('electron-store');
const store = new Store();

function setupFolderHandlers() {

    /*
    * Get the folder path from the store
    * @returns {Promise<string>} The folder path
    */
    ipcMain.handle('get-folder-path', async () => {
        return store.get('folderPath', '');
    });

    /*
    * Set the folder path in the store
    * @param {string} path The folder path to set
    * @returns {Promise<boolean>} True if the folder path was set successfully
     */
    ipcMain.handle('set-folder-path', async (event, path) => {
        store.set('folderPath', path);
        return true;
    });

    /*
    * Select a folder
    * @returns {Promise<string>} The selected folder path
    */
    ipcMain.handle('select-folder', async () => {
        const result = await dialog.showOpenDialog({
            properties: ['openDirectory']
        });

        if (!result.canceled) {
            return result.filePaths[0];
        }

        return null;
    });

    /*
    * Create a new folder
    * @param {string} folderName The name of the new folder
    * @returns {Promise<string>} The path of the new folder
     */
    ipcMain.handle('create-folder', async (event, folderName) => {
        const folderPath = store.get('folderPath', '');
        if (!folderPath) {
            throw new Error('Base folder path not set');
        }
        const newFolderPath = path.join(folderPath, folderName);

        try {
            await fs.promises.mkdir(newFolderPath, { recursive: true });
            return newFolderPath;
        } catch (error) {
            console.error('Error creating folder:', error);
            throw error;
        }
    });

}

module.exports = { setupFileHandlers: setupFolderHandlers };