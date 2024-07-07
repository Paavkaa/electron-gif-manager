import { useEffect, useState, useCallback } from "react";

function useFetchCategories() {
    const [categories, setCategories] = useState([]); // list of existing categories

    const fetchCategories = useCallback(async () => {
        try {
            const response = await window.electron.getSubFolders();
            setCategories(response);
        } catch (error) {
            console.error("Failed to fetch categories:", error);
            // Optionally, you could set an error state here
        }
    }, []);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    return [categories, fetchCategories];
}

export default useFetchCategories;