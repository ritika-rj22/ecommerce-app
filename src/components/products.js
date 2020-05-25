import React, { Component, Fragment } from 'react';
import Product from "./product";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';

class Products extends Component {

    componentWillMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    {
                        this.props.products.map(product => {
                            return <Product productInfo={product} />
                        })
                    }
                </div>
            </Fragment>

        );
    }
}

Products.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired
}

export const categoryFilter = (arr, categoryId) => {
    if (!categoryId || !categoryId.length) return arr;

    return arr.filter(product => categoryId.includes(product.categoryId));
};

const mapStateToProps = state => {

    const categoryId = state.categories.categoryIds;
    // const orderBy = state.orderBy;
    // let filterByCategoryArr = state.products.items;
    //   if(categoryId && categoryId.length)  {
    const filterByCategoryArr = categoryFilter(state.products.items, categoryId);
    //   }
    // const filterByOrderArr = orderByFilter(filterByBrandArr, orderBy);


    // return {products: filterByOrderArr }
    // return {products: filterByBrandArr}

    return { products: filterByCategoryArr }
}

export default connect(mapStateToProps, { fetchProducts })(Products);