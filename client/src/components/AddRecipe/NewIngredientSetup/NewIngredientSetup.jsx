import React from 'react';
import './NewIngredientSetup.css';

const newIngredientSetup = (props) => {

    return (
        <form id="newRecipe">
            <div className="form-group">
                <h3>Add Ingredient Form:</h3>
                <div className="bg-light rounded new-ingredient-container">
                    <div className="form-group">
                        <label htmlFor="addNewIngredientToDB">Add An Ingredient To The Dropdown</label>
                        <input type="text" className="form-control" id="addNewIngredientToDB" placeholder="name of new ingredient"/>
                    </div>
                    <div>
                        <button className="btn btn-secondary add-ingred-btn">Add To Dropdown</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default newIngredientSetup;