import { FETCH_CATEGORIES } from "./types";
import CategoryList from "../data/categoryList.json";

export const fetchCategories = () => dispatch => {
    dispatch({
        type: FETCH_CATEGORIES,
        payload: CategoryList
    })

}