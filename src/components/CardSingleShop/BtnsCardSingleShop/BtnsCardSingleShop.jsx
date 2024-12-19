/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { CartContext } from "../../Store/CartContext";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { ShowToastSuccess } from "../../ShowToastSuccess/ShowToastSuccess";

export default function BtnsCardSingleShop({ product, productItem }) {
    const [count, setCount] = useState(1);
    const { cartItems, setCartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCount = (action) => {
        setCount((prevCount) => {
            if (action === "plus" && prevCount < product?.stock) {
                return prevCount + 1;
            } else if (action === "minus" && prevCount > 1) {
                return prevCount - 1;
            }
            return prevCount;
        });
    };

    const addToCart = (product, count) => {
        const existingProduct = cartItems.find(
            (item) =>
                item.id === product.id &&
                item.colorName === productItem.colorName &&
                item.size === productItem.size
        );

        if (existingProduct) {
            if (existingProduct.quantity + count <= product.stock) {
                const updatedCartItems = cartItems.map((item) =>
                    item.cartId === existingProduct.cartId
                        ? { ...item, quantity: item.quantity + count }
                        : item
                );
                setCartItems(updatedCartItems);
                ShowToastSuccess({ message: "Product added to cart successfully!" }); // عرض رسالة النجاح
            } else {
                alert("Exceeded stock limit");
            }
        } else {
            const newItem = {
                ...productItem,
                quantity: count,
                cartId: uuidv4(),
            };
            setCartItems([...cartItems, newItem]);
            ShowToastSuccess({ message: "Product added to cart successfully!" }); // عرض رسالة النجاح
        }
    };

    const handleBuyNow = () => {
        navigate("/checkout", { state: { product: productItem, quantity: count } });
    };

    return (
        <div className="box-btns">
            <div className="box-btns-top">
                <div className="box-stock">
                    <button
                        className="minus reset-btn"
                        onClick={() => handleCount("minus")}
                    >
                        <FiMinus />
                    </button>
                    <div className="count">{count}</div>
                    <button
                        className="plus reset-btn"
                        onClick={() => handleCount("plus")}
                    >
                        <GoPlus />
                    </button>
                </div>
                <button
                    className="btn btn-card"
                    onClick={() => addToCart(product, count)}
                >
                    Add to Cart
                </button>
            </div>
            <button className="btn btn-buy" onClick={handleBuyNow}>
                Buy It Now
            </button>
            <div className="box-btns-image">
                <img
                    src="https://elessi2.myshopify.com/cdn/shop/files/trust_image_360x.png?v=1623232906"
                    alt="Trust Badge"
                />
            </div>
        </div>
    );
}
