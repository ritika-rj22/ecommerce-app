import React, { Component } from 'react';
class Product extends Component {
    state = {}
    render() {
        return (
            <div className="col-md-3 col-sm-6">
                <div className="product-grid2">
                    <div className="product-image2">
                        <a href="#">
                            <img className="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg" />
                            <img className="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-2.jpeg" />
                        </a>
                        <ul className="social">
                            <li><a href="#" data-tip="Quick View"><i className="fa fa-eye"></i></a></li>
                            <li><a href="#" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                            <li><a href="#" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                        <a className="add-to-cart" href="">Add to cart</a>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><a href="#">Women's Designer Top</a></h3>
                        <span className="price">$599.99</span>
                    </div>
                </div>
            </div>);
    }
}

export default Product;