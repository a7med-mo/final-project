import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";


export default function NavBar() {
    return (
        <>
            <nav>
                <ul>
                    <li><CiSearch /></li>
                    <li className="none"><PiUserCircleLight /></li>
                    <li className="none"><CiHeart /></li>
                    <li><CiShoppingCart /></li>
                </ul>
            </nav>
        </>
    )
}
