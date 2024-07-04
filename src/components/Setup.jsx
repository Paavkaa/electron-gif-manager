import React from "react";

export default function Setup() {
    const [folderPath, setFolderPath] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleCreateFolder = async () => {
        if(!folderPath) {
            setMessage('Please enter a valid path');
            return;
        }

        try {
            const created = await window.electron.createFolder(folderPath);
            if(created) {
                setMessage('Folder was created');
            } else {
                setMessage('Folder already exists');
            }
        } catch (e) {
            console.error('Error creating folder:', e);
            setMessage('Error creating folder');
        }
    }

    return (
        <div>
            <h1>Set up</h1>
            <p>There was not found default folder. Let's create one!</p>

            <button onClick={handleCreateFolder}>Create folder</button>
            {message && <p>{message}</p>}
        </div>
    );
}