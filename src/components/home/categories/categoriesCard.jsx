import React, { Component } from 'react';
import Card from '../card/card';
import './categoriesCard.css';

class CategoriesCard extends Component {
    state = {  } 
    render() { 
        return (<Card className="categories_card">
            <div className="card"></div>
        </Card>);
    }
}
 
export default CategoriesCard;