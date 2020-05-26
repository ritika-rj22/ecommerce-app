import React, { Fragment, Component } from "react";
import {connect} from 'react-redux';
import CheckoutBottom from "./checkoutBottom";
import CartItem from '../components/CartItem/CartItem';

class Cart extends Component {
    state = {}
    render() {

        return (
            <div className="container" style={{paddingTop: '6rem'}}>
            <div className="card shopping-cart">
                <div className="card-header bg-dark text-light">
                    <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
                    Shipping cart
                    <div className="clearfix"></div>
                </div>
                <div className="card-body">
                    {this.props.cartItemCount ? this.props.cartItems.map(cart => (
                        <CartItem {...cart} img={cart.image} /> 
                        
                    )) : <h1 className="display-4 mt-5 text-center">There is no product in your cart</h1> }
                </div>
                <div className="card-footer">
                    <div className="pull-right" style={{margin: '10px'}}>
                        <div className="pull-right" style={{margin: '5px'}}>
                            Total price: <b>{(this.props.totalPrice)}€</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            // <Fragment>
            //     <div class="col-12">
            //         <div class="table-responsive">
            //             <table class="table table-striped">
            //                 <thead>
            //                     <tr>
            //                         <th scope="col"> </th>
            //                         <th scope="col">Product</th>
            //                         <th scope="col">Available</th>
            //                         <th scope="col" class="text-center">Quantity</th>
            //                         <th scope="col" class="text-right">Price</th>
            //                         <th> </th>
            //                     </tr>
            //                 </thead>
            //                 <tbody>
            //                     <tr>
            //                         <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
            //                         <td>Product Name Dada</td>
            //                         <td>In stock</td>
            //                         <td><input class="form-control" type="text" value="1" /></td>
            //                         <td class="text-right">124,90 €</td>
            //                         <td class="text-right"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
            //                     </tr>
            //                     <tr>
            //                         <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
            //                         <td>Product Name Toto</td>
            //                         <td>In stock</td>
            //                         <td><input class="form-control" type="text" value="1" /></td>
            //                         <td class="text-right">33,90 €</td>
            //                         <td class="text-right"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
            //                     </tr>
            //                     <tr>
            //                         <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
            //                         <td>Product Name Titi</td>
            //                         <td>In stock</td>
            //                         <td><input class="form-control" type="text" value="1" /></td>
            //                         <td class="text-right">70,00 €</td>
            //                         <td class="text-right"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
            //                     </tr>
            //                     <tr>
            //                         <td></td>
            //                         <td></td>
            //                         <td></td>
            //                         <td></td>
            //                         <td>Sub-Total</td>
            //                         <td class="text-right">255,90 €</td>
            //                     </tr>
            //                     <tr>
            //                         <td></td>
            //                         <td></td>
            //                         <td></td>
            //                         <td></td>
            //                         <td>Shipping</td>
            //                         <td class="text-right">6,90 €</td>
            //                     </tr>
            //                     <tr>
            //                         <td></td>
            //                         <td></td>
            //                         <td></td>
            //                         <td></td>
            //                         <td><strong>Total</strong></td>
            //                         <td class="text-right"><strong>346,90 €</strong></td>
            //                     </tr>
            //                 </tbody>
            //             </table>
            //         </div>
            //     </div>
            // </Fragment >
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
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
}

export default connect(mapStateToProps, null)(Cart);
