import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchCategories from "../utils/fetchData";

export default function CategoryDisplay() {
    const [fetchedCategories, fetchCategories] = useFetchCategories();
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState('');

    // Update local categories state when fetchedCategories changes
    useEffect(() => {
        setCategories(fetchedCategories);
    }, [fetchedCategories]);

    const handleSearch = async () => {
        const response = await window.electron.searchFolder(search);
        setCategories(response);
    }

    const resetSearch = async () => {
        setSearch('');
        await fetchCategories();
        // No need to setCategories here, the useEffect will handle it
    }

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search categories"
            />
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