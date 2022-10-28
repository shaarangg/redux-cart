import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
// store/state is used to sore all the state data
// reducer is used to update the store
// actions are the operations carried to perform some function

function App() {
    // cart setup

    return (
        <main>
            <Navbar />
            <CartContainer cart={cartItems} />
        </main>
    );
}

export default App;
