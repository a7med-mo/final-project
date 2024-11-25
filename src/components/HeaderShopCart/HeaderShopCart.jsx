import { Link } from "react-router-dom";


export default function HeaderShopCart() {
    return (
        <>
            <div className="header-shop-cart">
                <h2>Shopping Cart</h2>
                <Link to={"/"}>home</Link>
            </div>
        </>
    )
}
