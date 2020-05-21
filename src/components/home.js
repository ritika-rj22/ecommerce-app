import React, { Component } from 'react';
import Products from "./products";
import CategoryFilter from "../components/Categories/Categories";

class Home extends Component {
    state = {}
    render() {
        return (
            // <div>
            // <div className="row">
            //         {/* <FilterBar/> */}
            //         <div className="col-lg-3">
            //             <div className="row">
            //                 <div className="col-12">
            //                     <CategoryFilter/>
            //                 </div>
            //                 {/* <div className="col-12">
            //                     <OrderFilter/>
            //                 </div> */}
            //             </div>
            //         </div>
            // </div>
            // <Products />
            // </div>

            <div className="container" style={{paddingTop: '6rem'}} >
                <div className="row">
                    {/* <FilterBar/> */}
                    <div className="col-lg-3">
                        <div className="row">
                            <div className="col-12">
                                <CategoryFilter/>
                            </div>
                            {/* <div className="col-12">
                                <OrderFilter/>
                            </div> */}
                        </div>
                    </div>
                    <Products/>
                </div>
            </div>
        );
    }
}

export default Home;