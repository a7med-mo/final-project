/* eslint-disable react/prop-types */
import { GrView } from "react-icons/gr";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export default function Card({ product }) {

    return (

        <>
            <Link className="box-card" to={`/${product.id}/${product.name}`}>

                <div className="btn-card">
                    <button ><IoMdHeartEmpty /></button>
                    <button><GrView /></button>
                </div>

                <div className="box-image-card">
                    <img src={product?.images[0]} alt={product?.name} className= "image-card" />
                    <img src={product?.images[1]} alt={product?.name} className= "hover-image-card" />
                </div>

                <div className="box-content-card">
                    <h3>{product?.name}</h3>
                    <h4>${product?.price}</h4>
                </div>

                <div className="box-color">
                    <ul>
                        {product?.colors?.map((color) => (
                            <li key={color.colorName}>
                                <button style={{ background: `${color.hexCode}` }}></button>
                            </li>
                        ))}
                    </ul>
                </div>

            </Link>
        </>
    )

}
