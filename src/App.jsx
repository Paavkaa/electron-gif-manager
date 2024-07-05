import React, {useEffect} from 'react';
import Home from "./components/home/Home";
import {Route, Routes} from "react-router-dom";
import Setup from "./components/Setup";
import CreateNewCategory from "./components/home/createNewCategory";
import AddNewGif from "./components/addNewGif";
import NotFound from "./components/NotFound";
import CategoryPage from "./components/CategoryPage";

const App = () => {
    const [folderPath, setFolderPath] = React.useState(null);

    useEffect(() => {
        getFolderPath();
    }, []);

    const getFolderPath = async () => {
        try {
            const path = await window.electron.getFolderPath();
            setFolderPath(path);
        } catch (e) {
            console.error('Error getting folder path:', e);
        }
    }

    return (
        <Routes>
            {!folderPath && <Route path="/" element={<Setup />} />}
            <Route path="/" element={<Home />} />
            <Route path="/create-new-category" element={<CreateNewCategory />} />
            <Route path="/add-new-gif" element={<AddNewGif />} />
            <Route path="/add-new-gif/:category" element={<AddNewGif />} />

            <Route path="/:category" element={<CategoryPage />} />

            // Notfound page
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;