/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";
import { WishlistContext } from "../WishlistContaxt/WishlistContaxt";

export default function Card({ product }) {
    const { wishlist, setWishlist } = useContext(WishlistContext);
    const [like, setLike] = useState(false);
    const [selectedColorI, setSelectedColorI] = useState(0);

    const iColor = (i) => {
        setSelectedColorI(i);
    };

    useEffect(() => {
        const isLiked = wishlist.some((item) => item.id === product.id);
        setLike(isLiked);
    }, [wishlist, product.id]);

    const handleLike = () => {
        if (!like) {
            const updatedWishlist = [...wishlist, product];
            setWishlist(updatedWishlist);
        } else {
            const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
            setWishlist(updatedWishlist);
        }
        setLike(!like);
    };

    return (
        <div className="box-card">
            <div className="btn-card">
                <button onClick={handleLike}>
                    {like ? <IoMdHeart className="like" /> : <IoMdHeartEmpty />}
                </button>
            </div>

            {product.discount > 0 &&
                <div className="discount">
                    <span>{`${product.discount}%`}</span>
                </div>
            }

            <Link className="box-image-card" to={`/${product.id}/${product.name}`}>
                <div className="image-full-screen">
                    {product?.colors[selectedColorI]?.image ? (
                        <>
                            <img src={product.colors[selectedColorI]?.image[0]} alt={product.name} className="image-card" />
                            <img src={product.colors[selectedColorI]?.image[1]} alt={product.name} className="hover-image-card" />
                        </>

                    ) : (
                        <svg>
                            <path xmlns="http://www.w3.org/2000/svg" fill="none" d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40 C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" stroke="#f76b6a" strokeWidth="2" strokeDasharray="205.271142578125 51.317785644531256"><animate attributeName="stroke-dashoffset" calcMode="linear" values="0;256.58892822265625" keyTimes="0;1" dur="1" begin="0s" repeatCount="indefinite" /></path>
                        </svg>
                    )}
                </div>

            </Link>

            <Link className="box-content-card" to={`/${product.id}/${product.name}`}>
                <h3>{product?.name}</h3>
                {
                    product.discount > 0 ?
                        <div className="box-discount">
                            <h4 className="price-discount">
                                <del>${product?.price.toFixed(2)}</del>
                            </h4>
                            <h4>
                                ${product?.price.toFixed(2) - (product.price * product.discount / 100)}
                            </h4>
                        </div>
                        :
                        <div>
                            <h4>${product?.price.toFixed(2)}</h4>
                        </div>
                }
            </Link>

            <div className="box-color">
                <ul>
                    {product?.colors?.length > 0 && (
                        product?.colors?.map((color, i) => (
                            <li
                                key={i}
                                className={`${selectedColorI === i ? "active" : ""}`}
                                onClick={() => iColor(i)}

                            >
                                <span style={{ background: color?.hexCode }}></span>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}
