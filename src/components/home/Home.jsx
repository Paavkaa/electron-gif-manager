import React from 'react';
import {Link} from "react-router-dom";
import CategoryDisplay from "./CategoryDisplay";

export default function Home() {
    return (
        <div>
            <h1>GIF manager</h1>

            <Link to={'/create-new-category'}>Create new category</Link>
            <br/> {/*TODO: Remove when adding styles*/}
            <Link to={'/add-new-gif'}>Add new GIF</Link>

            <h2>Categories</h2>
            <CategoryDisplay />
        </div>
    );
}