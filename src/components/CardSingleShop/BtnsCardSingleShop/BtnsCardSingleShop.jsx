/* eslint-disable react/prop-types */
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useContext, useState } from "react";
import { CartContext } from "../../Store/CartContext";
import { v4 as uuidv4 } from "uuid";
import { CheckOutContext } from "../../Store/CheckOutContext";

export default function BtnsCardSingleShop({ product, productItem }) {

    const [count, setCount] = useState(1);
    const cart = useContext(CartContext);
    const puyNowProduct = useContext(CheckOutContext);

    const handleCount = (action) => {
        if (action === 'plus') {

            if (product?.stock > count) {

                setCount(count + 1);

            }

        } else if (action === 'minus') {

            if (count > 1) {
                setCount(count - 1);
            }

        }
    };

    const addToCart = (product, count) => {
        const existingProduct = cart.cartItems.find(item =>
            item.id === product.id &&
            item.colorName === productItem.colorName &&
            item.size === productItem.size
        );

        if (existingProduct) {
            if (existingProduct.quantity + count <= product.stock) {
                existingProduct.quantity += count;
                cart.setCartItems([...cart.cartItems]);
            } else {
                alert("Exceeded stock limit");
            }
        } else {
            const newItem = { ...productItem, quantity: count, cartId: uuidv4() };
            const updatedCart = [...cart.cartItems, newItem];
            cart.setCartItems(updatedCart);
        }
    };

    const puyNow = () => {
        const newItem = { ...productItem, quantity: count, cartId: uuidv4() };
        const updatedCart = [newItem];
        puyNowProduct.setPuyItNow(updatedCart);

    }

    console.log(puyNowProduct.puyItNow);



    return (
        <>
            <div className="box-btns">

                <div className="box-btns-top">
                    <div className="box-stock">
                        <button className="minus reset-btn" onClick={() => handleCount('minus')}><FiMinus /></button>
                        <div className="count">{count}</div>
                        <button className="plus reset-btn" onClick={() => handleCount('plus')}><GoPlus /></button>
                    </div>
                    <button className="btn btn-card" onClick={() => addToCart(product, count)}>add to cart</button>
                </div>

                <button className="btn btn-buy" onClick={puyNow}>buy it now</button>

                <div className="box-btns-image">
                    <img src="https://elessi2.myshopify.com/cdn/shop/files/trust_image_360x.png?v=1623232906" alt="" />
                </div>

            </div>

        </>
    )
}
