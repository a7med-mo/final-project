import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";
import { AiOutlineProduct } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Store/CartContext";
import { WishlistContext } from "../../WishlistContaxt/WishlistContaxt";


export default function NavBar() {

    const cart = useContext(CartContext);
    const {wishlist} = useContext(WishlistContext);

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={"/shopCart"}>
                            <CiShoppingCart />
                            <span>
                                {cart.cartItems.reduce((total, item) => total + item.quantity, 0)}
                            </span>
                        </Link>
                    </li>

                    <li className="none">
                        <Link to={"/wishlist"}>
                            <CiHeart />
                            <span>
                                {wishlist.length}
                            </span>
                        </Link>
                    </li>

                    <li>
                        <Link>
                            <CiSearch />
                        </Link>
                    </li>

                    <li>
                        <Link to={"/shop"}>
                            <AiOutlineProduct />
                        </Link>
                    </li>

                    <li className="none">
                        <Link>
                            <PiUserCircleLight />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
