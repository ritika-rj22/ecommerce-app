import React, { Fragment, Component } from 'react';
import './style/style.css';
import { Route, Switch } from 'react-router-dom';
import Header from "./components/header";
import Banner from "./components/banner";
import Login from "./components/login";
import Footer from "./components/footer";
import Cart from "./components/cart";
import Home from "./components/home";
import Category from "./components/category";
import ProductInfo from "./components/Products/productInfo"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    if (this.props.location.pathname === "/login") {
      return (
        <Login />
      )
    } else {

      return (
        <Fragment>
          <Header />
          <Banner />
          <div className="container mb-4">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cart" component={Cart} />
              <Route path="/category/:categoryName" component={Category} />
              <Route path="/productInfo" component={ProductInfo} />
              {/* <Route path="/category/:categoryName" component={Category} /> */}
            </Switch>

          </div>
          <Footer />
        </Fragment>
      );
    }
  }
}

export default App;
