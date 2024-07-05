import React from "react";
import {Link, useParams} from "react-router-dom";

export default function CategoryPage() {
    const {category} = useParams();

    return (
        <div>
            <Link to={'/'}>Go back to home</Link>
            <h1>{category}</h1>
            <Link to={`/add-new-gif/${category}`}>Add new GIF</Link>
        </div>
    );
}