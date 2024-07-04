const {ipcMain} = require('electron');
const fs = require('fs');
const Store = require('electron-store');
const store = new Store();

function setupFileHandlers() {
    /*
    * This handler gets the path to the folder
    * @returns {string} - path to the folder
    */
    ipcMain.handle('get-folder-path', async () => {
        return store.get('folderPath', '');
    });

    /*
    * This handler sets the path to the folder
    * @param {string} path - path to the folder
    * @returns {boolean} - true if path was set, false otherwise
    */
    ipcMain.handle('set-folder-path', async (event, path) => {
        store.set('folderPath', path);
        return true;
    });

   /*
   * This handler checks if folder exists
   * @param {string} path - path to folder
   * @returns {boolean} - true if folder exists, false otherwise
   */
    ipcMain.handle('check-folder', async (event, path) => {
        return fs.existsSync(path);
    });

    /*
    * This handler creates a folder if it doesn't exist
    * @param {string} path - path to folder
    * @returns {boolean} - true if folder was created, false otherwise
     */
    ipcMain.handle('create-folder', async (event, path) => {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
            return true;
        }
        return false;
    });

    /*
    * This handler returns a list of files in a folder
    * @param {string} path - path to folder
    * @returns {string[]} - list of files in the folder
     */
    ipcMain.handle('get-files', async (event, path) => {
        return fs.readdirSync(path);
    });
}