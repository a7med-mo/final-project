/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";


export default function HeaderSingleShop({ product }) {
    return (
        <>
            <div className="header-single-shop px">
                <Link to="/">
                    Home <IoIosArrowForward />
                </Link>
                <Link to="/">
                    {product?.type}<IoIosArrowForward />
                </Link>
                <span>{product?.name}</span>
            </div>
        </>
    )
}
