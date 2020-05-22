import React, { Fragment, Component } from 'react';
import './style/style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/header";
import Banner from "./components/banner";
import Login from "./components/login";
import Footer from "./components/footer";
import Cart from "./components/cart";
import Home from "./components/home";
import Category from "./components/category";
import Logout from "./components/logout"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    console.log(this.props.location.pathname);
  }

  render() {
    if (this.props.location.pathname == "/login") {
      return (
        <Login />
      )
    } else {
      return (
        <Fragment>

          <Header />
          <Banner />
          <div className="container mb-4">
            <img className="pic-1" src={Image} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cart" component={Cart} />
              <Route path="/category/:categoryName" component={Category} />
              <Route path="/logout" component={Logout} />
            </Switch>

          </div>
          <Footer />
        </Fragment>
      );
    }
  }
}

export default App;
