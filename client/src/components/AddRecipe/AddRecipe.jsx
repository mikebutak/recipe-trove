import React from 'react';
import RecipeInput from './RecipeInput/RecipeInput';
import NewIngredientSetup from './NewIngredientSetup/NewIngredientSetup';
import NewRecipePreview from './NewRecipePreview/NewRecipePreview';
import './AddRecipe.css';

const addRecipeForm = (props) => {
    
    return (
        <div className="row recipeFormContainer">
            <div className="row">
                <h2>How To Add a New Recipe:</h2>
                <p>Fill out the "Add New Recipe" form below.  Before submitting, check your recipe in the preview area to ensure accuracy.  If an ingredient you need is not present in the ingredients dropdown, add it using the Add Ingredient Form at the bottom of this page.</p>
            </div>    
            <div className="row">
                <div className="col-6">
                    <RecipeInput 
                        ingredientsList = {props.ingredientsList}
                        updateName={props.updateName}
                        updateDescription={props.updateDescription}
                        addIngredientName={props.addIngredientName}
                        addIngredientQty={props.addIngredientQty}
                        addIngredientClick={props.addIngredientClick}
                    />
                    <NewIngredientSetup

                    />
                </div>
                <div className="col-6">
                    <NewRecipePreview
                        previewName={props.previewName}
                        description={props.description}
                    />
                </div>
            </div>
        </div>
    )
}

export default addRecipeForm;