import React, { Fragment, Component } from "react";
import CheckoutBottom from "./checkoutBottom";

class Cart extends Component {
    state = {}
    render() {

        return (
            < Fragment >
                <div class="col-12" style={{ backgroundColor: "white" }}>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col"> </th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Available</th>
                                    <th scope="col" class="text-center">Quantity</th>
                                    <th scope="col" class="text-right">Price</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                    <td>Product Name Dada</td>
                                    <td>In stock</td>
                                    <td><input class="form-control" type="text" value="1" /></td>
                                    <td class="text-right">124,90 €</td>
                                    <td class="text-right"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
                                </tr>
                                <tr>
                                    <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                    <td>Product Name Toto</td>
                                    <td>In stock</td>
                                    <td><input class="form-control" type="text" value="1" /></td>
                                    <td class="text-right">33,90 €</td>
                                    <td class="text-right"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
                                </tr>
                                <tr>
                                    <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                    <td>Product Name Titi</td>
                                    <td>In stock</td>
                                    <td><input class="form-control" type="text" value="1" /></td>
                                    <td class="text-right">70,00 €</td>
                                    <td class="text-right"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Sub-Total</td>
                                    <td class="text-right">255,90 €</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Shipping</td>
                                    <td class="text-right">6,90 €</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>Total</strong></td>
                                    <td class="text-right"><strong>346,90 €</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fragment >
        )
    }
}

export default Cart;