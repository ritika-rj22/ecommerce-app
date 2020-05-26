import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Categories.css';
import { fetchCategories, addBrandToFilter, removeBrandFromFilter } from '../../actions/categoryActions';

class CategoryFilter extends Component {

    componentWillMount() {
        this.props.fetchCategories();
    }

    handleSelectBox = (e) => {
        const name = e.target.name;
        // const value = e.target.checked;

        if (e.target.checked) {
            this.props.addBrandToFilter(name);
        } else {
            this.props.removeBrandFromFilter(name);
        }
    };

    render() {
        return (<article className="card-group-item">
            <header className="card-header">
                <h6 className="title">Categories </h6>
            </header>
            <div className="filter-content">
                <div className="card-body">
                    <form>
                        {this.props.categories.map((category,index) => (
                            <label className="form-check" key={index}>
                                <input className="form-check-input" type="checkbox" name={category.categoryId} onClick={this.handleSelectBox} />
                                <span className="form-check-label">
                                    {category.categoryName}
                                </span>
                            </label>
                        ))}
                    </form>

                </div>
            </div>
        </article>
            // <div className="card mb-3">
            //     <div className="card-header">
            //         <h3>Categories</h3>
            //     </div>
            //     <ul className="list-group flex-row flex-wrap">
            //         {this.props.categories.map(category => (
            //             <li className="list-group-item flex-50" key={category}>
            //                 <label className="custom-checkbox text-capitalize"> {category.categoryName}
            //                     <input type="checkbox"
            //                         name={category.categoryId}
            //                         className="custom-checkbox__input" onClick={this.handleSelectBox} />
            //                     <span className="custom-checkbox__span"></span>
            //                 </label>
            //             </li>
            //         ))}
            //     </ul>
            // </div>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories.items
})

export default connect(mapStateToProps, { fetchCategories, addBrandToFilter, removeBrandFromFilter })(CategoryFilter);