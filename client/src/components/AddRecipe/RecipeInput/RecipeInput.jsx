import React from 'react';
import './RecipeInput.css';

const RecipeInput = (props) => {
    var ingredientsList = props.ingredientsList.map(ingred => {
        return (
            <option id={ingred.id} key={ingred.id}>{ingred.name}</option>
        )
    })

    return (
        <div>
            <form id="newRecipe">
                <h3>Add New Recipe:</h3>
                <div className="form-group">
                    <label htmlFor="newRecipeInputName">Recipe Name</label>
                    <input type="text" onChange={props.updateName} className="form-control" id="newRecipeInputName" placeholder="name of recipe"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="newRecipeFormControlTextArea">Recipe Description</label>
                    <textarea className="form-control" onChange={props.updateDescription} id="newRecipeFormControlTextArea" rows="3" placeholder="description of recipe"></textarea>
                </div>
            </form>
            <form id="newRecipe">
                <div className="bg-light rounded ingredient-container">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="nextIngredientFormControlSelect">Select Ingredient</label>
                                <select className="form-control" onChange={props.addIngredientName} id="nextIngredientFormControlSelect">
                                {ingredientsList}
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="IngredientQtyFormControl">Input Qty Needed</label>
                                <input type="text" onChange={props.addIngredientQty} className="form-control" id="IngredientQtyFormControl" placeholder="E.g., 2 cups"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={props.addIngredientClick} className="btn btn-secondary add-ingred-btn">Add To Recipe</button>
                        <p>Don't See An Ingredient You Need? Use the Add Ingredient Form (below) To Add a New Ingredient To The List.</p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RecipeInput;