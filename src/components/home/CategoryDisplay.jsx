import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function CategoryDisplay() {
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const response = await window.electron.getSubFolders();
        setCategories(response);
    }

    const handleSearch = async () => {
        const response = await window.electron.searchFolder(search);
        setCategories(response);
    }

    const resetSearch = async () => {
        setSearch('');
        fetchCategories();
    }

    return (
        <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
            <button onClick={resetSearch}>Reset</button>

            {categories.map(category => (
                <Link to={category} key={category}>
                    <h3>{category}</h3>
                </Link>
            ))}
        </div>
    );
}