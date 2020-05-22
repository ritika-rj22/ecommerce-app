import { USER_LOGIN } from "../actions/types";

const initialState = {
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {

        case USER_LOGIN:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}   
