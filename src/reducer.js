import { REMOVE, CLEAR_CART } from "./actions";
function reducer(state, action) {
    if (action.type === REMOVE) {
        const id = action.payload.id;
        return { ...state, cart: state.cart.filter((item) => item.id !== id) };
    }
    if (action.type === CLEAR_CART) {
        return { ...state, cart: [] };
    }
    return state;
}
export default reducer;
