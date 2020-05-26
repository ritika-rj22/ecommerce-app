import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, INCREMENT_CART_ITEM_QUANTITY, DECREMENT_CART_ITEM_QUANTITY} from "./types"
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

export const incrementCartQuantity = productId => dispatch => {
    dispatch({
        type: INCREMENT_CART_ITEM_QUANTITY,
        payload: productId
    })
};

export const decrementCartQuantity = productId => dispatch => {
  dispatch({
      type: DECREMENT_CART_ITEM_QUANTITY,
      payload: productId
  })
};
