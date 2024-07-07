import React from "react";
import {Link} from "react-router-dom";
import useFetchCategories from "./utils/fetchData";

export default function AddNewGif() {
    const [selectedCategory, setSelectedCategory] = React.useState('');
    const [fetchedCategories, fetchCategories] = useFetchCategories();
    const [file, setFile] = React.useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleAdd = async () => {

    }

    return (
        <div>
            <Link to={'/'}>Back</Link>
            <h1>Add new GIF</h1>

            <div>
                {fetchedCategories.map(category => (
                    <div>
                        <input
                            type="radio"
                            key={category}
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
            <button onChange={handleAdd}>Add</button>
        </div>
    );
}