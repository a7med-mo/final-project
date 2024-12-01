
// import { PiEmptyLight } from "react-icons/pi";
import { CiShoppingCart } from "react-icons/ci";
// import { CiFaceMeh } from "react-icons/ci";
import { Link } from "react-router-dom";



export default function CartEmpty() {
    return (
        <>
            <div className="section-cart-empty">
                <div className="box-icon">
                    <CiShoppingCart className="icon" />
                </div>
                <h2>Your cart is empty.</h2>
                <p>
                    Before proceed to checkout you must add some products to your shopping cart.
                    You will find a lot of interesting products on our &quot;Shop&quot; page.
                </p>
                <Link to="/" className="btn">Return To Shop</Link>
                <p>Free Shipping for all orders over <strong>$100.00</strong> </p>
            </div>
        </>
    )
}
