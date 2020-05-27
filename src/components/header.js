
import React, { Fragment, Component } from "react";
import { NavLink, Redirect, Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categoryActions';
import { continueStatement } from "@babel/types";
import { fetchProducts } from '../actions/productActions';
import { logout } from '../actions/loginActions';

class Header extends Component {

    constructor(props) {
        super(props)
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))

        this.state = {
            userInfo: userInfo,
            searchText: ""
        }
    }
    componentWillMount() {
        this.props.fetchCategories();
    }

    onSearch = () => {
        this.props.fetchProducts(this.state.searchText);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    logoutSession = () => {
        this.props.logout();
    }


    render() {
        let loginlogut = "";
        if (this.state.userInfo) {
            loginlogut = (<li className="nav-item">
                <a onClick={this.logoutSession} className="nav-link" style={{ cursor: "pointer" }}>Logout</a>
            </li>)
        } else {
            loginlogut = (
                <li className="nav-item">
                    <NavLink to="/login" className="nav-link">Login</NavLink>
                </li>)

        }
        if (this.props.loginuser.logoutStatus) {
            if (this.props.loginuser.logoutStatus == "success") {
                localStorage.removeItem("userInfo");
                return (<Redirect to="/login" />)
            }
        }
        return (
            <Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" to="/">E-Commerce</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item m-auto">
                                    <NavLink to="/" exact className="nav-link">Home</NavLink>
                                </li>

                                <li className="nav-item m-auto">
                                    <NavLink to="/cart" className="nav-link">Cart</NavLink>
                                </li>
                                {
                                    loginlogut
                                }

                            </ul>

                            <form className="form-inline my-2 my-lg-0">
                                <div className="input-group input-group-sm ">
                                    <input type="text" className="form-control" name="searchText" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search..." onChange={this.onChange} />
                                    <div className="input-group-append">
                                        <button type="button" className="btn btn-secondary btn-number" onClick={this.onSearch}>
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                                {/* <div className="ml-3">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                            Categories
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {
                                                this.props.categories.map(category => {
                                                    return (

                                                        <Dropdown.Item><NavLink to={"/category/" + category.categoryName} className="nav-link">{category.categoryName}</NavLink></Dropdown.Item>

                                                    )
                                                })
                                            }

                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div> */}
                                <a className="btn btn-success btn-sm ml-3" href="cart.html">
                                    <i className="fa fa-shopping-cart"></i> Cart
                    <span className="badge badge-light" style={{ marginLeft: "5px" }}>{this.props.cartItemCount}</span>
                                </a>
                            </form>
                        </div>
                    </div>
                </nav>
            </Fragment >
        );
    }
}

Header.propTypes = {
    fetchCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    logout: PropTypes.func.isRequired,
    loginuser: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    categories: state.categories.items,
    loginuser: state.loginuser.item,
    cartItemCount: state.cart.cart.length
})

export default connect(mapStateToProps, { fetchCategories, fetchProducts, logout })(Header);