import React from 'react';
import Ingredient from './Ingredient/Ingredient';

const detailView = (props) => {
    const ingredientList = props.recipe.ingredients.map((ingredient) => {
        return (
            <Ingredient 
                key={ingredient.id}
                name={ingredient.name}
                qty={ingredient.quantity}
            />
        )
    })

    return (
        <div className="col detailView">
            <div className="row imgRow">
                <div className="col detail-gutter">
                </div>
                <div className="col focal-space">
                    <img className="detailImg" src="https://static1.squarespace.com/static/586d74a903596e659c26fbd4/t/5aefc5d8758d4670efb7c1bd/1525663217587/banana+bread.png" alt="Card image cap"/>
                </div>
                    <div className="col detail-gutter">
                </div>
            </div>
            <div className="row descriptionRow">
                <div className="col">
                    {props.recipe.description}
                </div>
            </div>
            <div className="row ingredRow">
                <div className="ingredCol">
                    {ingredientList}
                </div>
            </div>    
        </div>
    )
}

export default detailView;