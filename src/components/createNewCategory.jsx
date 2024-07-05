import React from "react";
import {Link} from "react-router-dom";

export default function CreateNewCategory() {
    const [categoryName, setCategoryName] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleCreateCategory = async () => {
        try {
            const success = await window.electron.createFolder(categoryName);
            if (success) {
                setMessage('Category was created successfully!');

                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
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
            <input type="text" placeholder="Name" onChange={(e) => setCategoryName(e.target.value)}/>
            <button onClick={handleCreateCategory}>Create</button>
            {message && <p>{message}</p>}
        </div>
    );
}