import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { placeOrder } from "../actions/orderActions";


toast.configure()
class CheckoutBottom extends Component {

    checkoutCart = () => {
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) {
            let itemIds = this.props.cartItems.map(item => {
                return item.productId
            });
            console.log("items", itemIds)
            this.props.placeOrder(itemIds)
        } else {
            toast.warn("Login before checkout!")
        }
    }
    render() {
        console.log("props", this.props.orders)
        if (this.props.orders.status == "success") {
            return (<Redirect to="/thankyou" />)
        }
        return (
            <div className="col mb-2">
                <div className="row">
                    <div className="col-sm-12  col-md-6">
                        <Link to="/" className="btn btn-lg btn-block btn-light">Continue Shopping</Link>
                    </div>
                    <div className="col-sm-12 col-md-6 text-right">
                        <button className="btn btn-lg btn-block btn-success text-uppercase" onClick={this.checkoutCart}>Checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

CheckoutBottom.propTypes = {
    placeOrder: PropTypes.func.isRequired,
    orders: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    console.log(state, 'state has changed');
    return {
        orders: state.orders.items
    }
}

export default connect(mapStateToProps, { placeOrder })(CheckoutBottom);