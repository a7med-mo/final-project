import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";


export default function WishlistEmpty() {
    return (
        <>
            <div className="section-wishlist-empty">
                <div className="box-icon">
                    <IoMdHeartEmpty className="icon" />
                </div>
                <h2>Wishlist is empty.</h2>
                <p>
                    You don&apos;t have any products in the wishlist yet.
                    You will find a lot of interesting products on our &quot;Shop&quot; page.
                </p>
                <Link to="/" className="btn">Return To Shop</Link>
            </div>
        </>
    )
}
