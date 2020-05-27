import './CartItem.css';
import React, { Fragment, Component } from "react";
import { connect } from 'react-redux';
import { removeProductFromCart, incrementCartQuantity, decrementCartQuantity } from "../../actions/cartActions";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
class CartItem extends Component {

    constructor(props) {
        super(props);
        // this.state ={itemQuantity:this.props.quantity, setItemQuantity: this.props.quantity };
        this.state = { setItemQuantity: this.props.quantity };
    }

    removeItem = () => {
        this.props.removeProductFromCart(this.props.productId);
        toast.success('Product has been removed from the cart');
    };


    incrementOrDecrement = (e, type) => {
        // const [itemQuantity, setItemQuantity] = useState(this.props.quantity);

        const value = this.state.setItemQuantity;
        console.log(type, value);

        if (type === 'increment' && value < 10) {
            // setItemQuantity(itemQuantity + 1);
            this.setState({ setItemQuantity: value + 1 });
            this.props.incrementCartQuantity(this.props.productId);
        }


        if (type === 'decrement' && value > 1) {
            // setItemQuantity(itemQuantity - 1);
            this.setState({ setItemQuantity: value - 1 });
            this.props.decrementCartQuantity(this.props.productId);
        }

    };

    render() {
        return (
            <div className="row align-items-center mb-3">
                <div className="col-12 col-sm-12 col-md-2 text-center">
                    <img className="img-responsive" src={require(`../../images/${this.props.img}`)} style={{ height: '60%', width: '60%' }} alt={this.props.productDescription}
                    />
                </div>
                <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                    <h4 className="product-name"><strong>{this.props.productName}</strong></h4>

                    <h4>
                        <small className="product-description">{this.props.productDescription}</small>
                    </h4>
                </div>
                <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row product-quantity-container align-items-center">
                    <div className="col-6 col-sm-6 col-md-6 text-md-right" style={{ paddingTop: '5px' }}>
                        <h6><strong>{(this.props.productPrice)}$ <span className="text-muted">x</span></strong></h6>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4">
                        <div className="quantity">
                            <input
                                onClick={(e) => { this.incrementOrDecrement(e, 'increment') }}
                                type="button" value="+" className="plus" />
                            <input

                                type="number" step="1" max="10" min="1" value={this.state.setItemQuantity} title="Qty"
                                className="qty"
                                size="4" />
                            <input
                                onClick={(e) => { this.incrementOrDecrement(e, 'decrement') }}
                                type="button" value="-" className="minus" />
                        </div>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 text-right">
                        <button
                            type="button" className="btn btn-outline-danger btn-xs" onClick={this.removeItem}>
                            <i className="fa fa-trash" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}

export default connect(null, { removeProductFromCart, incrementCartQuantity, decrementCartQuantity })(CartItem);

