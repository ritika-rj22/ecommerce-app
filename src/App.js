import React, { Fragment, Component } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/header";
import Banner from "./components/banner";
import Products from "./components/products";
import Footer from "./components/footer";
import Cart from "./components/cart";
import Home from "./components/home";
import Category from "./components/category";

class App extends Component {
  state = {}
  render() {

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
          </Switch>

        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
