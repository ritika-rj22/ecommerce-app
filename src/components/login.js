import React, { Component } from 'react';
import "../style/login.css";
import {NavLink, Redirect} from "react-router-dom";
import validateInput from "./validators/validateInput";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions/loginActions';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = { 
            username : "",
            password : "",
            errors: {},
            isloading: false
         }
    }    
    

    onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    }

    isValid = () => {
        const {errors, isValid} = validateInput(this.state);

        if(!isValid){
            console.log(errors)
            this.setState({errors});
        }

        return isValid;
    }

    onSubmit = (e) => {
        if(this.isValid()){ 
            this.setState({errors:{},isloading:true});            
            this.props.login(this.state);   
            //this.props.history.push("/")
            
        }
    }   


    render() {
            if(this.props.loginuser.status){
                if(this.props.loginuser.status == "success"){
                    localStorage.setItem("userInfo",JSON.stringify(this.props.loginuser.user))
                    return (<Redirect to="/"/>)
                } else {
                    this.setState({"errors.invalidUser":"Inavlid username or password"})
                }
            }
               
         
        return (           
            <div id="login">
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" className="form">
                                    <h3 className="text-center text-info">Login</h3>
                                    <div className="invalidUserError"><span>{this.state.errors.invalidUser}</span></div>
                                    <div className="form-group">
                                        <label  className="text-info">Username:</label><br/>
                                        <input type="text" name="username" id="username" className="form-control" onChange={this.onChange}/>
                                        <p className="error">{this.state.errors.username}</p>
                                    </div>
                                    <div className="form-group">
                                        <label className="text-info">Password:</label><br />
                                        <input type="text" name="password" id="password" className="form-control" onChange={this.onChange}/>
                                        <p className="error">{this.state.errors.password}</p>
                                    </div>
                                    <div className="form-group">
                                        <label className="text-info"><span>Remember me</span></label> <br />
                                        <input type="submit" name="submit" className="btn btn-info btn-md" value="Submit" disabled={this.state.isloading} onClick={this.onSubmit}/>
                                    </div>
                                    <div id="register-link" className="text-right">
                                    <NavLink to="/" className="text-info">Go To Home Page</NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}


Login.propTypes = {
    login: PropTypes.func.isRequired,
    loginuser: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    loginuser: state.loginuser.item
})

export default connect(mapStateToProps, { login })(Login);