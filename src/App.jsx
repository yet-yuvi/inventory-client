import React from "react";
import { Navbar, Footer, Products } from "./components";
import { CartContext, CartProvider } from "./contexts";
import "./App.css";

function MainArea() {
  return (
    <main>
      <Products />
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <MainArea />
        </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
