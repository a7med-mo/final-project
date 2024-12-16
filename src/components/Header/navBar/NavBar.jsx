import { CiSearch, CiHeart, CiShoppingCart, CiLogin } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";
import { AiOutlineProduct } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Store/CartContext";
import { WishlistContext } from "../../WishlistContaxt/WishlistContaxt";
import CustomOffcanvas from "../../CustomOffcanvas/CustomOffcanvas";
import { useQuery } from "@tanstack/react-query";
import { axiosConfig } from "../../../utils/axiosConfig";
import { supabase } from "../../../utils/supabaseClient";
import User from "../../User/User";

export default function NavBar() {
    const cart = useContext(CartContext);
    const { wishlist } = useContext(WishlistContext) || { wishlist: [] };
    const [show, setShow] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showUser, setShowUser] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const handleUser = () => {
        setShowUser(!showUser);
    };
    
    const handleLogout = async () => {
        try {
            await supabase.auth.signOut();

            localStorage.removeItem('sb-uioxugtlgudsoxwvfnsb-auth-token');

            const cookies = document.cookie.split("; ");
            for (let c of cookies) {
                const d = c.indexOf("=");
                const cookieName = d > -1 ? c.substr(0, d) : c;
                document.cookie = `${cookieName}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
            }

            setIsLoggedIn(false);
            setShowUser(false);
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };


    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li>
                    <Link to={"/shopCart"} title="Cart">
                        <CiShoppingCart className="icon" />
                        <span>
                            {cart.cartItems?.reduce((total, item) => total + item.quantity, 0) || 0}
                        </span>
                    </Link>
                </li>
                <li className="none">
                    <Link to={"/wishlist"} title="Wishlist">
                        <CiHeart className="icon" />
                        <span>{wishlist?.length || 0}</span>
                    </Link>
                </li>
                <li>
                    <CiSearch className="icon" title="Search" onClick={handleShow} />
                </li>
                <CustomOffcanvas show={show} onClose={handleClose} products={data?.data} />
                <li className="none">
                    <Link to={"/shop"} title="Products">
                        <AiOutlineProduct className="icon" />
                    </Link>
                </li>
                {isLoggedIn ? (
                    <div onClick={handleUser} title="User">
                        <li className="none">
                            <PiUserCircleLight className="icon" />
                        </li>
                        <User showUser={showUser} handleLogout={handleLogout} />
                    </div>
                ) : (
                    <li className="none">
                        <Link to={"/login"} title="Login">
                            <CiLogin className="icon" />
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
