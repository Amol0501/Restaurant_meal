import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatesTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        
        const existingCarItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const existingCartItem = state.items[existingCarItemIndex];
        let updatesItems;
        
        if(existingCartItem) {
            const updatesItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatesItems = [...state.items];
            updatesItems[existingCarItemIndex]= updatesItem;
        }
        else{
            updatesItems = state.items.concat(action.item);
        }

        return {
            items: updatesItems,
            totalAmount: updatesTotalAmount
        }
    }
    if(action.type === 'REMOVE'){
        const existingCarItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        
        const existingItem = state.items[existingCarItemIndex];
        const updatesTotalAmount = state.totalAmount - existingItem.price;
        let updatesItems;
        if(existingItem.amount === 1){
            updatesItems = state.items.filter(item => item.id !== action.id)
        }
        else{
            const updatesItem = {...existingItem, amount: existingItem.amount - 1};
            updatesItems = [...state.items];
            updatesItems[existingCarItemIndex] = updatesItem;
        }
        return {
            items: updatesItems,
            totalAmount: updatesTotalAmount
        }
    }

    if(action.type === 'CLEAR') {
        return defaultCartState
    }
    return defaultCartState;
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type: 'ADD',
            item: item
        })
    };
    const removeItemToCartHandler = (id) => {
        dispatchCartAction({
            type: 'REMOVE',
            id: id
        })
    };
    
    const clearCartHandler = () => {
        dispatchCartAction({type: 'CLEAR'});
    }
    const cartContext = {
        items: cartState.items,
        amount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
        clearCart: clearCartHandler
    }

    return <CartContext.Provider value = {cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;