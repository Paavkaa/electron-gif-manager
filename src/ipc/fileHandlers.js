const {ipcMain} = require('electron');
const fs = require('fs');
const path = require('path');


function setupFileHandlers() {
    /*
    * Save a file
    * @param {string} content The content to save
    * @param {string} filePath The path to save the file to
    * @returns {Promise<void>}
    */
    ipcMain.handle('save-file', async (event, content, filePath) => {
        try {
            await fs.promises.writeFile(filePath, content);
        } catch (error) {
            console.error('Error saving file:', error);
            throw error;
        }
    });
}