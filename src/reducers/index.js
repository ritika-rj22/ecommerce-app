import { combineReducers } from "redux";
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import userReducer from './userReducer';


export default combineReducers({
    products: productReducer,
    categories: categoryReducer,
    loginuser: userReducer
})