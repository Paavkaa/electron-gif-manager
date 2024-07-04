import React from 'react';
import Home from "./components/Home";
import {Route, Routes} from "react-router-dom";

const App = () => {
    const [folderPath, setFolderPath] = React.useState(null);

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
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default App;