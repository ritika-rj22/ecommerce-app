import React, { Component } from 'react';
import '../style/productInfo.css';
import { Link } from "react-router-dom";
import { addProductToCart } from "../actions/cartActions";
import { connect } from 'react-redux';

class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productInfo: this.props.location.state.productInfo,
            quantity: [1, 2, 3, 4, 5]
        }
    }

    handleAddToCart = (e) => {
        console.log('Inside Add to cart');
        this.props.addProductToCart(this.state.productInfo);
    }


    render() {
        return (
            <div class="row" style={{ backgroundColor: "#fff" }}>
                <aside class="col-sm-5 border-right">
                    <article class="gallery-wrap">
                        <div class="img-big-wrap">
                            <div> <img src={require(`../images/${this.state.productInfo.image}`)} /></div>
                        </div>

                    </article>
                </aside>
                <aside class="col-sm-7">
                    <article class="card-body p-5">
                        <h3 class="title mb-3">{this.state.productInfo.productName}</h3>

                        <p class="price-detail-wrap">
                            <span class="price h3 text-warning">
                                <span class="currency">$</span><span class="num">{this.state.productInfo.productPrice}</span>
                            </span>
                        </p>
                        <dl class="item-property">
                            <dt>Description</dt>
                            <dd><p>{this.state.productInfo.productDescription} </p></dd>
                        </dl>
                        <dl class="param param-feature">
                            <dt>Model#</dt>
                            <dd>{this.state.productInfo.model}</dd>
                        </dl>
                        <dl class="param param-feature">
                            <dt>Color</dt>
                            <dd>{this.state.productInfo.color}</dd>
                        </dl>
                        <hr />
                        <div class="row">
                            <div class="col-sm-5">
                                <dl class="param param-inline">
                                    <dt>Quantity: </dt>
                                    <dd>
                                        <select class="form-control form-control-sm" style={{ width: "70px" }}>
                                            {
                                                this.state.quantity.map(qty => {
                                                    return (<option value={qty} key={qty}>{qty}</option>)
                                                })
                                            }
                                        </select>
                                    </dd>
                                </dl>
                            </div>

                        </div>
                        <hr />
                        <Link to="/cart" class="btn btn-md btn-primary text-uppercase" style={{ marginRight: "10px" }}> Buy Now </Link>
                        <a href="javascript:void(0)" class="btn btn-md btn-outline-primary text-uppercase" onClick={this.handleAddToCart}> <i class="fas fa-shopping-cart"></i> Add to cart </a>
                        <p style={{ marginTop: "10px" }}><Link to="/" > <i class="fas fa-arrow-left"></i> Go Back </Link></p>
                    </article>
                </aside>
            </div >
        );
    }
}

export default connect(null, { addProductToCart })(ProductInfo);