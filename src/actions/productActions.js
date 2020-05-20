import { FETCH_PRODUCTS } from "./types";
import ProductList from "../productList.json";

export const fetchProducts = () => dispatch => {
    dispatch({
        type: FETCH_PRODUCTS,
        payload: ProductList
    })

}