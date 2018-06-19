import React from 'react';
import RecipeCard from './RecipeCard/RecipeCard';

const home = (props) => {


    return props.recipes.map((recipe) => {
        return <RecipeCard
            recipeData={recipe}
            key={recipe.id}
        />
    })
}

export default home;