import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTALS } from "../actions";
import { useEffect } from "react";
const CartContainer = ({ cart = [], total, clearCart, getTotals }) => {
    useEffect(() => {
        getTotals();
    });

    if (cart.length === 0) {
        return (
            <section className="cart">
                {/* cart header */}
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        );
    }
    return (
        <section className="cart">
            {/* cart header */}
            <header>
                <h2>your bag</h2>
            </header>
            {/* cart items */}
            <article>
                {cart.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })}
            </article>
            {/* cart footer */}
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button className="btn clear-btn" onClick={clearCart}>
                    clear cart
                </button>
            </footer>
        </section>
    );
};
const MapStateToProps = (state) => {
    return { cart: state.cart, total: state.total };
};
const MapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => {
            dispatch({ type: CLEAR_CART });
        },
        getTotals: () => {
            dispatch({ type: GET_TOTALS });
        },
    };
};
export default connect(MapStateToProps, MapDispatchToProps)(CartContainer);
