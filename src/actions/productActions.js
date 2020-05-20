import { FETCH_PRODUCTS } from "./types";
import ProductList from "../data/productList.json";

export const fetchProducts = () => dispatch => {
    dispatch({
        type: FETCH_PRODUCTS,
        payload: ProductList
    })

}