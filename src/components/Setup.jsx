import React, {useEffect} from "react";

export default function Setup() {
    const [folderPath, setFolderPath] = React.useState('');
    const [message, setMessage] = React.useState('');

    useEffect(() => {
        if(folderPath) {
            console.log('Folder path:', folderPath);
        }
    }, [folderPath]);

    const handleSelectFolder = async () => {
        try {
            const path = await window.electron.selectFolder();
            setFolderPath(path);
            const success = await window.electron.setFolderPath(path);
            if (success) {
                setMessage('Folder was set successfully!');
            } else {
                setMessage('Folder was not set!');
            }
        } catch (e) {
            console.error('Error selecting folder:', e);
        }
    }

    return (
        <div>
            <h1>Set up</h1>
            <p>There was not found default folder. Let's create one!</p>

            <button onClick={handleSelectFolder}>Create folder</button>
            {message && <p>{message}</p>}
        </div>
    );
}