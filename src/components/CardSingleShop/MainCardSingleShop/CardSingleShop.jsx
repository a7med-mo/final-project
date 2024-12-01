/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

import { useState } from "react";
import ContentCardSingle from "../ContentCardSingle/ContentCardSingle";
import ImageCardSingle from "../ImageCardSingle/ImageCardSingle";

export default function CardSingleShop({ product }) {
    if (!product || !product.colors || product.colors.length === 0) {
        return <div>Loading...</div>;
    }

    const [selectedColorI, setSelectedColorI] = useState(0);
    const [productItem, setProductItem] = useState({
        id: product.id,
        name: product.name,
        price: product.price,
        stock: product.stock,
        colors: product.colors,
        sizes: product.sizes,
        indexColor: 0,
        indexSize: 0,
        colorName: product.colors[0]?.colorName || "Default Color",
        image: product.colors[0]?.image?.[0] || "default-image.jpg",
        size: product.sizes?.[0] || "Default Size",
    });
    

    return (
        <div className="card-single-shop px">
            <ImageCardSingle
                images={product.colors[selectedColorI]?.image || ["default-image.jpg"]}
            />
            
            <ContentCardSingle
                product={product}
                selectedColorI={selectedColorI}
                setSelectedColorI={setSelectedColorI}
                productItem={productItem}
                setProductItem={setProductItem}
            />
        </div>
    );
}
