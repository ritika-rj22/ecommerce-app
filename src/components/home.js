import React, { Component, Fragment } from 'react';
import Products from "./products";
import CategoryFilter from "../components/Categories/Categories";

class Home extends Component {
    state = {}
    render() {
        return (
            <Fragment>               

                <div className="container" >
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card" style={{ width: '250px' }} >
                            <CategoryFilter />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <Products />
                        </div>
                        {/* <FilterBar/> */}
                        {/* <div className="col-lg-3">
                        <div className="row">
                            <div className="col-12">
                                <CategoryFilter />
                            </div>
                            
                        </div>
                    </div>  */}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Home;