import { act } from "@testing-library/react";
import { REMOVE, CLEAR_CART, INCREASE, DECREASE, GET_TOTALS, TOGGLE_AMOUNT } from "./actions";
function reducer(state, action) {
    if (action.type === REMOVE) {
        const id = action.payload.id;
        return { ...state, cart: state.cart.filter((item) => item.id !== id) };
    }
    if (action.type === CLEAR_CART) {
        return { ...state, cart: [] };
    }
    if (action.type === INCREASE) {
        return {
            ...state,
            cart: state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    item.amount += 1;
                }
                return item;
            }),
        };
    }
    if (action.type === DECREASE) {
        return {
            ...state,
            cart: state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    item.amount -= 1;
                }
                return item;
            }),
        };
    }

    if (action.type === GET_TOTALS) {
        let { total, amount } = state.cart.reduce(
            (cartTotal, cartItem) => {
                cartTotal.amount += cartItem.amount;
                cartTotal.total += cartItem.amount * cartItem.price;
                return cartTotal;
            },
            {
                total: 0,
                amount: 0,
            }
        );
        total = parseFloat(total.toFixed(2));
        return { ...state, amount: amount, total: total };
    }

    if (action.type === TOGGLE_AMOUNT) {
        return {
            ...state,
            cart: state.cart.filter((item) => {
                if (item.id === action.payload.id) {
                    if (action.payload.toggle == "inc") item.amount += 1;

                    if (action.payload.toggle == "dec") item.amount -= 1;
                }
                return item;
            }),
        };
    }
    return state;
}
export default reducer;
