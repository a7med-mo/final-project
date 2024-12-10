import { CiSearch, CiHeart, CiShoppingCart, CiLogin } from "react-icons/ci";
// import { PiUserCircleLight } from "react-icons/pi";
import { AiOutlineProduct } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../Store/CartContext";
import { WishlistContext } from "../../WishlistContaxt/WishlistContaxt";
import CustomOffcanvas from "../../CustomOffcanvas/CustomOffcanvas";
import { useQuery } from "@tanstack/react-query";
import { axiosConfig } from "../../../utils/axiosConfig";

export default function HeaderMobile() {
    const cart = useContext(CartContext);
    const { wishlist } = useContext(WishlistContext) || { wishlist: [] };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { data } = useQuery(
        {
            queryKey: ['product'],
            queryFn: () => axiosConfig({
                method: 'get',
                url: `/products`
            })
        }
    )
    return (
        <>
            <nav className="navbar-mobile">
                <ul className="navbar-nav">
                    <li>
                        <Link to={"/shopCart"} title="Cart">
                            <CiShoppingCart className="icon" />
                            <span>{cart.cartItems?.reduce((total, item) => total + item.quantity, 0) || 0}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/wishlist"} title="Wishlist">
                            <CiHeart className="icon" />
                            <span>{wishlist?.length || 0}</span>
                        </Link>
                    </li>
                    <li>
                        <CiSearch className="icon" title="Search" onClick={handleShow} />
                    </li>
                    <CustomOffcanvas show={show} onClose={handleClose} products={data?.data} />
                    <li>
                        <Link to={"/shop"} title="Products">
                            <AiOutlineProduct className="icon" />
                        </Link>
                    </li>
                    <li>
                        <Link to={"/login"} title="User">
                            <CiLogin className="icon" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
