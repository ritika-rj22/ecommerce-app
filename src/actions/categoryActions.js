import { FETCH_CATEGORIES, ADD_BRAND_TO_FILTER, REMOVE_BRAND_FROM_FILTER } from "./types";
import CategoryList from "../data/categoryList.json";

export const fetchCategories = () => dispatch => {
    dispatch({
        type: FETCH_CATEGORIES,
        payload: CategoryList
    })

}

export const addBrandToFilter = (brand) => dispatch => {
    // return {
    //     type: ADD_BRAND_TO_FILTER,
    //     brand
    // }
    dispatch({
        type: ADD_BRAND_TO_FILTER,
        brand
    })
};


// export const removeBrandFromFilter = brand => {
//     return  {
//         type: REMOVE_BRAND_FROM_FILTER,
//         brand
//     }
// };

export const removeBrandFromFilter = (brand) => dispatch => {
    dispatch({
        type: REMOVE_BRAND_FROM_FILTER,
        brand
    })
};