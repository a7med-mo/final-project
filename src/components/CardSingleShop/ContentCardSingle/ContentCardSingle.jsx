/* eslint-disable react/prop-types */

import { useState } from "react";
import StarRating from "../../StarRating/StarRating";
import BtnsCardSingleShop from "../btnsCardSingleShop/BtnsCardSingleShop";


export default function ContentCardSingle({ product, selectedColorI, setSelectedColorI, productItem, setProductItem }) {

    const [isSize, setIsSize] = useState(0);

    const iColor = (i) => {
        setSelectedColorI(i);

        const newProductItem = {
            ...productItem,
            colorName: product?.colors[i]?.colorName,
            hexCode: product?.colors[i]?.hexCode,
            image: product?.colors[i]?.image[0]
        };

        setProductItem(newProductItem);
    };



    const iSize = (i) => {
        setIsSize(i);

        const newProductItem = {
            ...productItem,
            size: product?.sizes[i]
        };

        setProductItem(newProductItem);
    };



    return (
        <>
            <div className="content-card-single">
                <h2>{product?.name}</h2>
                <h3>${product?.price}</h3>

                <div className="reviews">
                    <StarRating rating={product?.rating} />
                    <p>({product?.reviews?.length} reviews)</p>
                </div>

                <p>{product?.description}</p>

                <ul>
                    <h4>Color: {product?.colors[selectedColorI]?.colorName}</h4>
                    {product?.colors?.map((color, i) => (
                        <li key={i} className={`${selectedColorI === i ? "active" : ""}`} onClick={() => iColor(i)}>
                            <span style={{ background: `${color.hexCode}` }}></span>
                        </li>
                    ))}
                </ul>

                <ul>
                    <h4>size: {product?.sizes[isSize]}</h4>
                    {product?.sizes?.map((size, i) => (
                        <li key={i} className={`size ${isSize === i ? "active" : ""}`} onClick={() => iSize(i)}>
                            <span >{size}</span>
                        </li>
                    ))}
                </ul>

                <BtnsCardSingleShop product={product} productItem={productItem} setProductItem={setProductItem} />
            </div>

        </>
    )
}
