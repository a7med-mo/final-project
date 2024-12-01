/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


export default function HeaderPages({title , link, nameLink}) {
    return (
        <>
            <div className="header-shop-cart">
                <h2>{title}</h2>
                <Link to={`/${link}`}>{nameLink}</Link>
            </div>
        </>
    )
}
