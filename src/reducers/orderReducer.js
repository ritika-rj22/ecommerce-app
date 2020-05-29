import { PLACE_ORDER, FETCH_ORDERS } from "../actions/types";

const initialState = {
    items: {}
}

export default function (state = initialState, action) {
    switch (action.type) {

        case PLACE_ORDER:
            let userOrders = [];
            console.log("orders", JSON.parse(localStorage.getItem("orders")))
            if (localStorage.getItem("orders")) {
                console.log("if")
                userOrders = JSON.parse(localStorage.getItem("orders"));

            } else {
                console.log("else")
            }
            userOrders.push(action.payload);
            console.log("userInfo a", userOrders)
            localStorage.setItem("orders", JSON.stringify(userOrders))
            return {
                ...state,
                items: { orders: action.payload, status: "success" }
            }
        case FETCH_ORDERS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}   
