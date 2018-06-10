import React, { Component } from 'react';
import Header from '../components/Header/Header';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <div className="app-container">
                <div className="header-row">
                    <Header />
                </div>
                <div className="body-row">
                    <div>Body Here</div>
                </div>
            </div>
        )
    }
}

export default App;