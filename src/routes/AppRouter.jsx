import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ContactPage, Layout, LoginPage, ProductsPage } from '../pages';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/products',
                element: <ProductsPage />,
            },
            {
                path: '/contact',
                element: <ContactPage />
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
])

export const AppRouterProvider = ({children}) => {
    return (<RouterProvider router={router}>{children}</RouterProvider>);
};