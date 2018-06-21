import React from 'react';
import './NewRecipePreview.css'

const newRecipePreview = (props) => {
    return (
        <div className="preview">
            <h3>Preview:</h3>
            <div className="bg-light rounded preview-container">
                <h5>Recipe Name: {props.previewName}</h5>
                <h5>Description: </h5>
                <p>{props.description}</p>
                <p>Lovely ingredients will go here</p>
            </div>
        </div>
    )
}

export default newRecipePreview;