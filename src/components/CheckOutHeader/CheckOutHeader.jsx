import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";


export default function CheckOutHeader() {
    return (
        <>
            <div className="check-out-header">
                <div className="logo">
                    <Link to="/">
                        <h2>elessi</h2>
                    </Link>
                </div>

                <Link to="/shopCart">
                    <CiShoppingCart />
                </Link>
            </div>
        </>
    )
}
