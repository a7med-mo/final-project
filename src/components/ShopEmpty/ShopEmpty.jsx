import { LuServerOff } from "react-icons/lu";
import { Link } from "react-router-dom";


export default function ShopEmpty() {
    return (
        <div className="section-shop-empty">
            <div className="box-icon">
                <LuServerOff className="icon" />
            </div>
            <h2>The partition is currently empty</h2>
            <p>
                We haven&apos;t added any products here yet. Follow us for new updates, or check out the rest of the store to discover more.
            </p>
            <Link to="/" className="btn">Return To Shop</Link>
        </div>
    )
}

