import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

const Logout = () => {
    localStorage.removeItem("userInfo");
    return (<Redirect to="/login" />)

}

export default Logout;