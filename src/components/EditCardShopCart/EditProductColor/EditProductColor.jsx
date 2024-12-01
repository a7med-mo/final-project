/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { CartContext } from "../../Store/CartContext";


export default function EditProductColor({ item,  }) {

    const [iColor, setIColor] = useState(item.indexColor);
    const cartProduct = useContext(CartContext);
    const handleColor = (i) => {
        setIColor(i);

        const updatedCartItems = cartProduct.cartItems.map((cartItem) => {
            if (cartItem.cartId === item.cartId) {
                return {
                    ...cartItem,
                    colorName: item?.colors[i]?.colorName,
                    hexCode: item?.colors[i]?.hexCode,
                    indexColor: i,
                    image: item?.colors[i]?.image[0],
                };
            }
            return cartItem;
        });

        cartProduct.setCartItems(updatedCartItems);
    };

    return (
        <>
            <ul className="edit-popap-color">
                <h4>Color: {item?.colors[iColor]?.colorName}</h4>
                {item?.colors?.map((color, i) => (
                    <li
                        key={i}
                        className={`${iColor === i ? "active" : ""}`}
                        onClick={() => handleColor(i)}
                    >
                        <span style={{ background: `${color?.hexCode}` }}></span>
                    </li>
                ))}
            </ul>
        </>
    )
}
