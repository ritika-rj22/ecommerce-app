import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "./types"
import ProductList from "../data/productList.json";

export const addProductToCart = product => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    }
};

export const removeProductFromCart = productId => dispatch => {
    dispatch({
        type: REMOVE_PRODUCT_FROM_CART,
        payload: productId
    })
};
