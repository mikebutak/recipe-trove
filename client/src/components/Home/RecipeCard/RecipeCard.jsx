import React from 'react';
import './RecipeCard.css';

const recipeCard = (props) => {
    let shortDescr = props.recipeData.description.slice(0, 50) +'...';
    return (
        <div className="card">
            <img className="card-img-top" src="https://static1.squarespace.com/static/586d74a903596e659c26fbd4/t/5aefc5d8758d4670efb7c1bd/1525663217587/banana+bread.png" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.recipeData.name}</h5>
                <p className="card-text">{shortDescr}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default recipeCard;