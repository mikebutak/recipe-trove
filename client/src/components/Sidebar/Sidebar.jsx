import React from 'react';

const sideBar = (props) => {

    return (
        <div className="col w-100 h-100 bg-light">
            <div className="sidebar-title">Actions:
            </div>
            <div>
            <button type="button" className="btn btn-secondary sidebar-btn" onClick={props.newRecipeForm}>Add New Recipe</button>
            </div>
        </div>
    )
}

export default sideBar;