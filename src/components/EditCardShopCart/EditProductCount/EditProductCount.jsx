/* eslint-disable react/prop-types */
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";


export default function EditProductCount({ item, editItem }) {

    const [count, setCount] = useState(item?.quantity);

    const handleCount = (action) => {
        if (action === "plus") {
            if (item.stock > item?.quantity) {
                setCount(count + 1);
                editItem(item.cartId, item?.quantity + 1);
            }
        } else if (action === "minus") {
            if (item?.quantity > 1) {
                setCount(count - 1);
                editItem(item.cartId, item?.quantity - 1);
            }
        }
    };

    return (
        <>

                <div className="box-stock-popap">
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

        </>
    )
}
