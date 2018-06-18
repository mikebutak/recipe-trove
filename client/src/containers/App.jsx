import React, { Component } from 'react';
import Header from '../components/Header/Header';
import './App.css';
import Home from '../components/Home/Home';
import recipes from '../../../database/seedData/receipeData';
import ingredients from '../../../database/seedData/ingredientData';

const addIngredNames = (recipes, ingredients) => {
    const ingredSummary = {};
    for (var h = 0; h < ingredients.length; h++ ) {
        ingredSummary[ingredients[h].id] = ingredients[h].name;
    }
    for (var i = 0; i < recipes.length; i++ ) {
        let ingreds = recipes[i].ingredients;
        for (var j = 0; j < ingreds.length; j++ ) {
            let lookupId = recipes[i].ingredients[j].id;
            recipes[i].ingredients[j].name = ingredSummary[lookupId];
        }
    }
    return recipes;
}

const recipeObj = addIngredNames(recipes, ingredients);


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 'home',
            recipes: null
        }
    }

    componentWillMount() {
        this.setState({
            recipes: recipeObj
        })
    }

    render() {
        console.log('recipe obj:', this.state.recipes);
        let temp = 'try this text';

        let view = (
            <Home 
                recipes={this.state.recipes}
                ingredients={this.state.ingredients}
            />
        )

        return (
            <div className="app-container">
                <div className="row header-row">
                    <Header />
                </div>
                <div className="row body-row">
                    <div className="col sidebar-container">
                        <p>sidebar will go here</p>
                    </div>
                    <div className="body-container">
                        {view}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;