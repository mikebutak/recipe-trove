import React, { Component } from 'react';
import Header from '../components/Header/Header';
import './App.css';
import Home from '../components/Home/Home';
import recipes from '../../../database/seedData/receipeData';
import ingredients from '../../../database/seedData/ingredientData';
import DetailView from '../components/DetailView/DetailView';
import Sidebar from '../components/Sidebar/Sidebar';
import AddRecipeForm from '../components/AddRecipe/AddRecipe';

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
            view: 'addRecipe',
            recipes: null,
            focalRecipe: {},
            ingredientsList: null,
            addRecipeName: "",
            addRecipeDescription: "",
            addRecipeIngredients: [],
            newIngredientNameToPush: '',
            newIngredientQtyToPush: ''
        }
        this.homeClickHandler = this.homeClickHandler.bind(this);
        this.getDetails = this.getDetails.bind(this);
        this.goToNewRecipeFormHandler = this.goToNewRecipeFormHandler.bind(this);
        this.updateNameHandler = this.updateNameHandler.bind(this);
        this.updateDescriptionHandler = this.updateDescriptionHandler.bind(this);
        this.addIngredientNameHandler = this.addIngredientNameHandler.bind(this);        
        this.addIngredientQtyHandler = this.addIngredientQtyHandler.bind(this);        
        this.addIngredientHandler = this.addIngredientHandler.bind(this);        
    }

    updateNameHandler (e) {
        var data = e.target.value;
        this.setState({
            addRecipeName: data
        })
    }

    updateDescriptionHandler (e) {
        var data = e.target.value;
        this.setState({
            addRecipeDescription: data
        })
    }

    addIngredientNameHandler (e) {
        var data = e.target.value;
        this.setState({
            newIngredientNameToPush: data
        })
    }
    
    addIngredientQtyHandler (e) {
        var data = e.target.value;
        this.setState({
            newIngredientQtyToPush: data
        })
    }
    
    addIngredientHandler () {
        var name = this.state.newIngredientNameToPush;
        var qty = this.state.newIngredientQtyToPush;
        var obj = {
            name: name,
            quantity: qty
        }
        this.state.addRecipeIngredients.push(obj);
        this.setState({
            newIngredientNameToPush: '',
            newIngredientQtyToPush: ''
        }, ()=> {console.log('this.state.addRecipeIngredients now:', this.state.addRecipeIngredients);})
    }

    componentWillMount() {
        this.setState({
            recipes: recipeObj,
            focalRecipe: recipeObj[0],
            ingredientsList: ingredients
        })
    }

    homeClickHandler () {
        this.setState({
            view:'home'
        })
    }

    getDetails (event) {
        var newFocalRecipeId = event.target.id;
        for (var i = 0; i < this.state.recipes.length; i++ ) {
            if (this.state.recipes[i].id === newFocalRecipeId) {
                this.setState({
                    focalRecipe: this.state.recipes[i],
                    view: 'detail'
                })
            }
        }
    }

    goToNewRecipeFormHandler () {
        this.setState({
            view: 'addRecipe'
        })
    }

    render() {
        let temp = 'try this text';

        let view = (
            <Home 
                recipes={this.state.recipes}
                ingredients={this.state.ingredients}
                getDetails={this.getDetails}
            />
        )

        if (this.state.view === 'home') {
            view = (
                <Home 
                    recipes={this.state.recipes}
                    ingredients={this.state.ingredients}
                    getDetails={this.getDetails}
                />
            )
        } else if (this.state.view === 'detail') {
            view = (
                <DetailView 
                    recipe={this.state.focalRecipe}
                    clickHome={this.homeClickHandler}
                />
            )
        } else if (this.state.view === 'addRecipe') {
            view = (
                <AddRecipeForm
                    ingredientsList = {this.state.ingredientsList}
                    updateName={this.updateNameHandler}
                    updateDescription={this.updateDescriptionHandler}
                    addIngredientName={this.addIngredientNameHandler}
                    addIngredientQty={this.addIngredientQtyHandler}
                    description={this.state.addRecipeDescription}
                    addIngredientClick={this.addIngredientHandler}
                    previewName={this.state.addRecipeName}
                />
            )
        }

        return (
            <div className="app-container">
                <div className="row header-row">
                    <Header />
                </div>
                <div className="row body-row">
                    <div className="col-3 sidebar-container">
                        <Sidebar 
                        newRecipeForm={this.goToNewRecipeFormHandler}/>
                    </div>
                    <div className="col-9 body-container">
                        {view}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;