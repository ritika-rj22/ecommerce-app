import { FETCH_CATEGORIES, ADD_BRAND_TO_FILTER, REMOVE_BRAND_FROM_FILTER } from "../actions/types";
import { act } from "react-dom/test-utils";

const initialState = {
    items: [],
    categoryIds:''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                ...state,
                items: action.payload
            }
        case ADD_BRAND_TO_FILTER:
                console.log('inside brand filter');
                // if(state.includes(action.brand)) return state;
                return {
                    ...state,
                    categoryIds: state.categoryIds+action.brand
                }
        case REMOVE_BRAND_FROM_FILTER:
                console.log('remove brand', action);
                const reg = new RegExp(action.brand, 'gi');
                // return state.replace(reg, '');
                return {
                    ...state,
                    categoryIds: state.categoryIds.replace(reg, '')
                }
        default:
            return state;
    }
}   
