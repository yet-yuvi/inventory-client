import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Layout,
  LoginPage,
  ContactPage,
  ProductsPage,
  InventoryPage,
} from "../pages";
import { ProductForm, Products } from "../components";
import SecureRoute from "./SecureRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      ...["/", "products"].map((path) => ({
        path,
        element: <ProductsPage />,
        children: [
          {
            index: "true",
            element: <Products />,
          },
          {
            path: "product-form",
            element: (
              <SecureRoute>
                <ProductForm />
              </SecureRoute>
            ),
          },
        ],
      })),
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "inventory",
        element: (
          <SecureRoute>
            <InventoryPage />
          </SecureRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export const AppRouterProvider = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};
