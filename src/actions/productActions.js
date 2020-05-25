import { FETCH_PRODUCTS } from "./types";
import ProductList from "../data/productList.json";

export const fetchProducts = (searchtext = null) => dispatch => {
    let productList = ProductList;
    if (searchtext) {
        productList = ProductList.filter(product => {
            let regex = new RegExp(searchtext, 'gi');
            let matchtext = product.productName.match(regex);
            if (matchtext && matchtext.length > 0) {
                return product;
            }
        })
    }
    dispatch({
        type: FETCH_PRODUCTS,
        payload: productList
    })

}