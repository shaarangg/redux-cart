import { REMOVE, CLEAR_CART, INCREASE, DECREASE } from "./actions";
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
    return state;
}
export default reducer;
