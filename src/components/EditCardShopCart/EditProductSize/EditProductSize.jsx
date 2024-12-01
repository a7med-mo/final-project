/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { CartContext } from "../../Store/CartContext";


export default function EditProductSize({ item }) {

    const [iSize, setISize] = useState(item.indexSize);
    const cartProduct = useContext(CartContext);

    const handleSize = (i) => {
        setISize(i);

        const updatedCartItems = cartProduct.cartItems.map((cartItem) => {
            if (cartItem.cartId === item.cartId) {
                return {
                    ...cartItem,
                    size: item?.sizes[i],
                    indexSize: i,
                };
            }
            return cartItem;
        });

        cartProduct.setCartItems(updatedCartItems);
    }


    return (
        <>
            <ul className="edit-poap-size">
                <h4>size: {item?.sizes[iSize]}</h4>
                {item?.sizes?.map((size, i) => (
                    <li key={i} className={`size ${iSize === i ? "active" : ""}`} onClick={() => handleSize(i)}>
                        <span >{size}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}
