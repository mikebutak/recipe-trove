import React from 'react';
import './Ingredient.css';

const ingredient = (props) => {
    return (
        <div>
            <div className="col ingredCol">
                <img className="bullet" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bullet_%28typography%29.svg/2000px-Bullet_%28typography%29.svg.png"/>
            </div>
            <div className="col ingredCol">
                {props.name}: 
            </div>
            <div className="col ingredCol">
                {props.qty}
            </div>
        </div>
    )
}

export default ingredient;