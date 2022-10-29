import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
// redux stuff
// store/state is used to sore all the state data
// reducer is used to update the store
// actions are the operations carried to perform some function

function App() {
    // cart setup

    const initalStore = { count: 1, amount: 5 };
    const store = createStore(reducer, initalStore);
    store.dispatch({ type: "HELLO" });
    return (
        <Provider store={store}>
            <Navbar />
            <CartContainer cart={cartItems} />
        </Provider>
    );
}

export default App;
