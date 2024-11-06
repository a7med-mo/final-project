import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../Layout/Layout";
import Error from "../pages/Error/Error";


export const routes = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
])

