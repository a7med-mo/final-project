/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { GrView } from "react-icons/gr";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";
import { WishlistContext } from "../WishlistContaxt/WishlistContaxt";

export default function Card({ product }) {
    const { wishlist, setWishlist } = useContext(WishlistContext);
    const [like, setLike] = useState(false);


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
                <button>
                    <GrView />
                </button>
            </div>

            <Link className="box-image-card" to={`/${product.id}/${product.name}`}>
                <img
                    src={product?.images?.[0] || "default-image.jpg"}
                    alt={product?.name || "Product Image"}
                    className="image-card"
                />
                <img
                    src={product?.images?.[1] || "default-image.jpg"}
                    alt={product?.name || "Hover Product Image"}
                    className="hover-image-card"
                />
            </Link>

            <Link className="box-content-card" to={`/${product.id}/${product.name}`}>
                <h3>{product?.name}</h3>
                <h4>${product?.price}</h4>
            </Link>

            <div className="box-color">
                <ul>
                    {product?.colors?.map((color) => (
                        <li key={color.colorName}>
                            <button style={{ background: `${color.hexCode}` }}></button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
