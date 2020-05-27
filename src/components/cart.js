import React, { Fragment, Component } from "react";
import { connect } from 'react-redux';
import CheckoutBottom from "./checkoutBottom";
import CartItem from '../components/CartItem/CartItem';
import { Link } from "react-router-dom";

class Cart extends Component {
    state = {}
    render() {

        return (
            <div className="container">
                <div className="card shopping-cart" style={{ width: "auto" }}>
                    <div className="card-header bg-dark text-light">
                        <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
                        Shipping cart
                    <div className="clearfix"></div>
                    </div>
                    <div className="card-body">
                        {this.props.cartItemCount ? this.props.cartItems.map(cart => (
                            <CartItem {...cart} img={cart.image} />

                        )) : <h3 className="display-4 mt-5 text-center">There is no product in your cart</h3>}
                    </div>
                    <div className="card-footer">
                        <div className="pull-right" style={{ margin: '10px' }}>
                            {this.props.cartItemCount ? (<div className="pull-right" style={{ margin: '5px' }}>
                                Total price: <b>{(this.props.totalPrice)}$</b>
                            </div>) : <h3></h3>}
                        </div>
                        {
                            this.props.cartItemCount ? "" :
                                (<p style={{ marginTop: "10px" }}><Link to="/" > <i class="fas fa-arrow-left"></i> Go Back </Link></p>)}
                        {this.props.cartItemCount ? <CheckoutBottom cartItems={this.props.cartItems} /> : ""}

                    </div>

                </div>

            </div>


        )
    }
}

const mapStateToProps = state => {

    console.log(state, 'state has changed');

    return {
        cartItems: state.cart.cart,
        cartItemCount: state.cart.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice: state.cart.cart.reduce((count, curItem) => {
            return count + (curItem.productPrice * curItem.quantity);
        }, 0)
    }
}

export default connect(mapStateToProps, null)(Cart);
