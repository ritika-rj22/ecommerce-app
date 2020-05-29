import { PLACE_ORDER } from "./types";
import { FETCH_ORDERS } from "./types";
import nextId from "react-id-generator";

export const placeOrder = (items) => dispatch => {
    const orderId = nextId();
    const order = {
        orderId: orderId,
        items: items
    }

    dispatch({
        type: PLACE_ORDER,
        payload: order
    })

}

export const fetchOrders = (userId) => dispatch => {
    dispatch({
        type: PLACE_ORDER,
        payload: userId
    })

}