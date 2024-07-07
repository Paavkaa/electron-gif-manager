import React from "react";
import {Link} from "react-router-dom";
import useFetchCategories from "./utils/fetchData";

export default function AddNewGif() {
    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const [fetchedCategories, fetchCategories] = useFetchCategories();
    const [file, setFile] = React.useState(null);
    const [message, setMessage] = React.useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleAdd = async () => {
        setMessage(null);
        console.log(selectedCategory, file);

        if (!selectedCategory || !file) {
            setMessage('Please select a category and a file');
            return;
        }

        try {
            const success = await window.electron.createFile(selectedCategory, file.path);
            if (success) {
                setMessage('GIF added successfully');
                // Reset form
                setSelectedCategory(null);
                setFile(null);
            } else {
                setMessage('Failed to add GIF');
            }
        } catch (error) {
            console.error('Error adding GIF:', error);
            setMessage('Failed to add GIF');
        }
    }

    return (
        <div>
            <Link to={'/'}>Back</Link>
            <h1>Add new GIF</h1>

            <div>
                {fetchedCategories.map(category => (
                    <div key={category}>
                        <input
                            type="radio"
                            id={category}
                            value={category}
                            checked={selectedCategory === category}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        />

                        <label htmlFor={category}>{category}</label>
                    </div>
                ))}
            </div>

            <input
                type="file"
                accept=".gif"
                onChange={handleFileChange}
            />
            <button onClick={handleAdd}>Add</button>
            {message && <p>{message}</p>}
        </div>
    );
}