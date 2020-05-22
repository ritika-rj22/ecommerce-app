
import React, { Fragment, Component } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categoryActions';
import { continueStatement } from "@babel/types";

class Header extends Component {

    constructor(props) {
        super(props)
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))

        this.state = {
            userInfo: userInfo
        }
    }
    componentWillMount() {
        this.props.fetchCategories();
    }
    render() {
        let loginlogut = "";
        if (this.state.userInfo) {
            loginlogut = (<li className="nav-item">
                <NavLink to="/logout" className="nav-link">Logout</NavLink>
            </li>)
        } else {
            loginlogut = (
                <li className="nav-item">
                    <NavLink to="/login" className="nav-link">Login</NavLink>
                </li>)

        }
        return (
            <Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">Simple Ecommerce</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item m-auto">
                                    <NavLink to="/" className="nav-link">Home</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/cart" className="nav-link">Cart</NavLink>
                                </li>
                                {
                                    loginlogut
                                }

                            </ul>

                            <form className="form-inline my-2 my-lg-0">
                                <div className="input-group input-group-sm ">
                                    <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search..." />
                                    <div className="input-group-append">
                                        <button type="button" className="btn btn-secondary btn-number">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="ml-3">
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
                                </div>
                                <a className="btn btn-success btn-sm ml-3" href="cart.html">
                                    <i className="fa fa-shopping-cart"></i> Cart
                    <span className="badge badge-light">3</span>
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
    categories: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    categories: state.categories.items
})

export default connect(mapStateToProps, { fetchCategories })(Header);