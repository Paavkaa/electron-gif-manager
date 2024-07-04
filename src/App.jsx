import React, {useEffect} from 'react';
import Home from "./components/Home";
import {Route, Routes} from "react-router-dom";
import Setup from "./components/Setup";
import CreateNewCategory from "./components/createNewCategory";
import AddNewGif from "./components/addNewGif";

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

    console.log(folderPath);

    return (
        <Routes>
            {!folderPath && <Route path="/" element={<Setup />} />}
            <Route path="/" element={<Home />} />
            <Route path="/create-new-category" element={<CreateNewCategory />} />
            <Route path="/add-new-gif" element={<AddNewGif />} />
        </Routes>
    );
};

export default App;