// const fs = require('fs');
// const recipeData = fs.readFileSync('../database/seedData/recipeData.txt');
// const ingredientData = fs.readFileSync('../database/seedData/ingredientData.txt');

// const JSONrecipeData = require('../database/seedData/recipeData.json');
// const recipeData = JSON.parse(recipeData);
// const JSONingredientData = require('../database/seedData/ingredientData.json');
// const ingredientData = JSON.parse(JSONingredientData);
const recipeData = require('../database/seedData/receipeData');
const ingredientData = require('../database/seedData/ingredientData');


exports.seed = function(knex, Promise) {
  return knex('recipe').del()
  .then(() => {
    return knex('ingredient').del();
  })
  .then(() => {
    return knex(`recipe-ingredient`).del();
  })
  .then(() => {
    return knex('ingredient').insert(ingredientData);
  })
  .then(() => {
    return knex('recipe').insert(recipeData);
  })
  .then(() => {
    let recipe_ingredientPromises = [];
    recipeData.forEach((recipe) => {
      let ingredientList = recipe.ingredients;
      ingredientList.forEach((ingredient) => {
        return knex('recipe_ingredient').insert({
          recipe_id: recipe.id,
          ingredient_id: ingredient.id,
          qty: ingredient.quantity
        });
      });
    });
  });
};
