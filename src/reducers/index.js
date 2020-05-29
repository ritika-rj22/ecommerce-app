import { combineReducers } from "redux";
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';


export default combineReducers({
    products: productReducer,
    categories: categoryReducer,
    loginuser: userReducer,
    cart: cartReducer,
    orders: orderReducer
})