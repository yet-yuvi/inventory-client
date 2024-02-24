import { CartProvider } from "../contexts";
import { Footer, Navbar } from "../components";
import { MainArea } from "../App";

export const Layout = () => {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <MainArea />
      </CartProvider>
      <Footer />
    </div>
  );
};
