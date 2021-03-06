import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, INCREMENT_CART_ITEM_QUANTITY, DECREMENT_CART_ITEM_QUANTITY} from "../actions/types";

const initialState = {
    items: [],
    cart: []
};

const cartReducer = (state=initialState, action) => {
    let updatedCart;
    let updatedItemIndex;

    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(item => item.productId === action.payload.productId);

            if(updatedItemIndex < 0) {
                updatedCart.push({...action.payload, quantity: 1});
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };

                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }

            return {...state, cart: updatedCart};

        case REMOVE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.productId === action.payload
            );
    
            updatedCart.splice(updatedItemIndex, 1);
    
            return {...state, cart: updatedCart};
        
        case INCREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.productId === action.payload
            );
        
           const incrementedItem = {
                  ...updatedCart[updatedItemIndex]
            };
        
            incrementedItem.quantity++;
        
            updatedCart[updatedItemIndex] = incrementedItem;
        
        
            return {...state, cart: updatedCart};
        
        case DECREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                    item => item.productId === action.payload
                );
        
            const decrementedItem = {
                ...updatedCart[updatedItemIndex]
            };
        
            decrementedItem.quantity--;
        
            updatedCart[updatedItemIndex] = decrementedItem;
        
            return {...state, cart: updatedCart};

        default:
            return state;
    }
}

export default cartReducer;
