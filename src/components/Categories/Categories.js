import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Categories.css';
// import {categories} from "../../data/categories";
// import {addBrandToFilter, removeBrandFromFilter} from "../../actions/productActions";
import { fetchCategories, addBrandToFilter, removeBrandFromFilter } from '../../actions/categoryActions';

class CategoryFilter extends Component{

    // constructor() {

    // }

    componentWillMount(){
        this.props.fetchCategories();
    }

    handleSelectBox = (e) => {
                const name = e.target.name;
                const value = e.target.checked;
        
                if(e.target.checked) {
                    this.props.addBrandToFilter(name);
                } else {
                    this.props.removeBrandFromFilter(name);
                }
            };

    render(){
        return (
                    <div className="card mb-3">
                        <div className="card-header">
                            <h3>Categories</h3>
                        </div>
                        <ul className="list-group flex-row flex-wrap">
                            {this.props.categories.map(category => (
                                <li className="list-group-item flex-50" key={category}>
                                    <label className="custom-checkbox text-capitalize"> {category.categoryName} 
                                        <input type="checkbox" 
                                               name={category.categoryId}
                                               className="custom-checkbox__input" onClick={this.handleSelectBox}/>
                                        <span className="custom-checkbox__span"></span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
    }
}

const mapStateToProps = state => ({
    categories: state.categories.items
})

// export default  CategoryFilter;
export default connect(mapStateToProps, {fetchCategories, addBrandToFilter, removeBrandFromFilter})(CategoryFilter);