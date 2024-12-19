/* eslint-disable react/prop-types */
import { CiSearch, CiHeart, CiShoppingCart, CiLogin } from "react-icons/ci";
import { AiOutlineProduct } from "react-icons/ai";
import { PiUserCircleLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Store/CartContext";
import { WishlistContext } from "../../WishlistContaxt/WishlistContaxt";
import CustomOffcanvas from "../../CustomOffcanvas/CustomOffcanvas";
import { useQuery } from "@tanstack/react-query";
import { axiosConfig } from "../../../utils/axiosConfig";
import { supabase } from "../../../utils/supabaseClient";

export default function HeaderMobile({ setIsLoggedIn, isLoggedIn }) {
    const cart = useContext(CartContext);
    const { wishlist } = useContext(WishlistContext) || { wishlist: [] };
    const [show, setShow] = useState(false);


    useEffect(() => {
        const { subscription } = supabase.auth.onAuthStateChange((event, session) => {
            setIsLoggedIn(!!session);
        });

        return () => {
            if (subscription) subscription.unsubscribe();
        };
    }, []);


    const { data } = useQuery({
        queryKey: ["product"],
        queryFn: () =>
            axiosConfig({
                method: "get",
                url: `/products`,
            }),
    });
    const cartItemCount = cart.cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;
    const wishlistCount = wishlist?.length || 0;

    return (
        <nav className="navbar-mobile">
            <ul className="navbar-nav">
                <li>
                    <Link to="/shopCart" title="Cart">
                        <CiShoppingCart className="icon" />
                        <span>{cartItemCount}</span>
                    </Link>
                </li>
                <li>
                    <Link to="/wishlist" title="Wishlist">
                        <CiHeart className="icon" />
                        <span>{wishlistCount}</span>
                    </Link>
                </li>
                <li>
                    <CiSearch className="icon" title="Search" onClick={() => setShow(true)} />
                </li>
                <CustomOffcanvas show={show} onClose={() => setShow(false)} products={data?.data} />
                <li>
                    <Link to="/shop" title="Products">
                        <AiOutlineProduct className="icon" />
                    </Link>
                </li>
                {isLoggedIn ? (
                    <div title="User">
                        <li>
                            <PiUserCircleLight className="icon" />
                        </li>
                    </div>
                ) : (
                    <li>
                        <Link to={"/login"} title="Login">
                            <CiLogin className="icon" />
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
