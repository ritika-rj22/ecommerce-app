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

const mapStateToProps = state => ({
    products: state.products.items
})

export default connect(mapStateToProps, { fetchProducts })(Products);