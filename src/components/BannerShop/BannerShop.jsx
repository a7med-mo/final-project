import { Link } from "react-router-dom";

export default function BannerShop() {
    return (
        <>
            <div className="banner-shop">
                <div className="banner-shop-image">
                    <img src="https://elessi2.myshopify.com/cdn/shop/files/elessi-bg2-scaled_1296x.jpg?v=1614391934" alt="img banner shop" />
                </div>

                <div className="banner-shop-content">
                    <h2>Fashion</h2>
                    <Link to="/">home</Link>
                </div>
            </div>
        </>
    )
}
