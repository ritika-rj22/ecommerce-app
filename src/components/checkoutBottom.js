import React, { Component, Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
class CheckoutBottom extends Component {

    checkoutCart = () => {
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) {

        } else {
            toast.warn("Login before checkout!")
        }
        console.log("userInfo", userInfo);
    }
    render() {
        return (
            <div class="col mb-2">
                <div class="row">
                    <div class="col-sm-12  col-md-6">
                        <Link to="/" class="btn btn-lg btn-block btn-light">Continue Shopping</Link>
                    </div>
                    <div class="col-sm-12 col-md-6 text-right">
                        <button class="btn btn-lg btn-block btn-success text-uppercase" onClick={this.checkoutCart}>Checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckoutBottom;