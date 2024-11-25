import { Link } from "react-router-dom";


export default function Logo() {
    return (
        <>
            <Link to={"/"}>
            <div className="box-logo">
                <img src="https://elessi2.myshopify.com/cdn/shop/files/logo-retina_135x.png?v=1614391959" alt="logo" />
                </div>
            </Link>
        </>
    )
}
