import React from 'react';
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>GIF manager</h1>
            <h2>Select category</h2>

            <Link to={'/create-new-category'}>Create new category</Link>
            <br/> {/*TODO: Remove when adding styles*/}
            <Link to={'/add-new-gif'}>Add new GIF</Link>

        </div>
    );
}