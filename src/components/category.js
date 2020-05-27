import React, { Component } from 'react';
import Products from "./Products/products";

class Category extends Component {
    state = {}
    render() {
        return (
            <div>
                <h3>Category wise product List</h3>
                <Products />
            </div>
        );
    }
}

export default Category;
