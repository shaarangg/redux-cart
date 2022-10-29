import { REMOVE, CLEAR_CART, INCREASE, DECREASE, GET_TOTALS } from "./actions";
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
        if (action.payload.amount === 1) {
            const id = action.payload.id;
            return { ...state, cart: state.cart.filter((item) => item.id !== id) };
        } else {
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
    return state;
}
export default reducer;
