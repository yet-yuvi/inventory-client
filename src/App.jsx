import { Products } from "./components";
import { AppRouterProvider } from "./routes";
import { Outlet } from "react-router-dom";
import "./App.css";

export function MainArea() {
  return (
    <main>
      <Products />
    </main>
  );
}

function App() {
  return (
    <AppRouterProvider>
      <Outlet />
    </AppRouterProvider>
  );
}

export default App;
