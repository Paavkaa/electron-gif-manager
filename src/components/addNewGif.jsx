import React from "react";
import {Link} from "react-router-dom";

export default function AddNewGif() {
    return (
        <div>
            <Link to={'/'}>Back</Link>
            <h1>Add new GIF</h1>
            <input type="text" placeholder="GIF name" />
            <input type="file" />
            <button>Add</button>
        </div>
    );
}