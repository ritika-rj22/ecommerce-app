import React, { Component } from 'react';
import Image from "../images/Image1.png";
import {addProductToCart} from "../actions/cartActions";
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
class Product extends Component {
    state = {}

    handleAddToCart = (e) => {
        console.log('Inside Add to cart');
        this.props.addProductToCart(this.props.productInfo);
    }
    render() {
        return (
            <div className="col-md-3 col-sm-6">
                <div className="product-grid2">
                    <div className="product-image2">
                        <a href="#">
                            <img className="pic-1" src={require(`../images/${this.props.productInfo.image}`)} />
                            <img className="pic-2" src={require(`../images/${this.props.productInfo.image}`)} />
                        </a>
                        <ul className="social">
                            <li><Link to={{
                                pathname: '/productInfo',
                                state: {
                                    productInfo: this.props.productInfo
                                }
                            }} data-tip="Quick View"><i className="fa fa-eye"></i></Link></li>
                            <li><a href="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                            <li><a href="#" data-tip="Add to Cart" onClick={this.handleAddToCart}><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                        <button className="add-to-cart"  onClick={this.handleAddToCart} href="">Add to cart</button>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><Link to={{
                            pathname: '/productInfo',
                            state: {
                                productInfo: this.props.productInfo
                            }
                        }}>{this.props.productInfo.productName}</Link></h3>
                        <span className="price">${this.props.productInfo.productPrice}</span>
                    </div>
                </div>
            </div>);
    }
}

export default connect(null, {addProductToCart}) (Product);
