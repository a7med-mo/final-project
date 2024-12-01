import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../Layout/Layout";
import Error from "../pages/Error/Error";
import Shop from "../pages/shop/Shop";
import SingleShop from "../pages/singleShop/SingleShop";
import ShopCart from "../pages/ShopCart/ShopCart";
import Wishlist from "../pages/Wishlist/Wishlist";
import CheckOut from "../pages/checkOut/CheckOut";


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
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "/:id/:name",
                element: <SingleShop />,
            },
            {
                path: "/shopCart",
                element: <ShopCart />,
            },
            {
                path: "/wishlist",
                element: <Wishlist />,
            },
            {
                path: "checkout",
                element: <CheckOut />,
            }
        ],
    },
])

