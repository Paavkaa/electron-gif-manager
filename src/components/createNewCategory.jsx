import React from "react";
import {Link} from "react-router-dom";

export default function CreateNewCategory(folderPath) {
    const [categoryName, setCategoryName] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleCreateCategory = async () => {
        try {
            const success = await window.electron.createFolder(folderPath, categoryName);
            if (success) {
                setMessage('Category was created successfully!');
            } else {
                setMessage('Category was not created!');
            }
        } catch (e) {
            console.error('Error creating category:', e);
        }
    }

    return (
        <div>
            <Link to={'/'}>Back</Link>
            <h1>Create new category</h1>
            <input type="text" placeholder="Name" onChange={setCategoryName}/>
            <button onClick={handleCreateCategory}>Create</button>
            {message && <p>{message}</p>}
        </div>
    );
}