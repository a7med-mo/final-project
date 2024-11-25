/* eslint-disable react/prop-types */
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";


export default function EditCardShopCart({ item, editItem, handleOpen }) {

    const [count, setCount] = useState(item?.quantity);


    const handleCount = (action) => {
        if (action === 'plus') {

            if (item.stock > item?.quantity) {

                setCount(count + 1);
                editItem(item.cartId, item?.quantity + 1);
            }

        } else if (action === 'minus') {

            if (item?.quantity > 1) {
                setCount(count - 1);
                editItem(item.cartId, item?.quantity - 1);
            }
        }
    };

    return (
        <>
            <div className="edit-popap">

                <div className="box-popap-edit">
                    <span className="close-popap" onClick={handleOpen}><IoMdClose /></span>
                    <div className="edit-popap-product">
                        <div className="box-image">
                            <img src={item?.image} />
                        </div>

                        <div className="box-content">
                            <h2>{item?.name}</h2>
                            <h4>${item?.price}</h4>
                        </div>
                    </div>
                    <ul>
                        <h4>Color: {product?.colors[selectedColorI]?.colorName}</h4>
                        {product?.colors?.map((color, i) => (
                            <li key={i} className={`${selectedColorI === i ? "active" : ""}`} onClick={() => iColor(i)}>
                                <span style={{ background: `${color.hexCode}` }}></span>
                            </li>
                        ))}
                    </ul>
{/* 
                    <ul>
                        <h4>size: {product?.sizes[isSize]}</h4>
                        {product?.sizes?.map((size, i) => (
                            <li key={i} className={`size ${isSize === i ? "active" : ""}`} onClick={() => iSize(i)}>
                                <span >{size}</span>
                            </li>
                        ))}
                    </ul> */}

                    <div className="edit-popap-quantity">
                        <div className="box-stock">
                            <button className="minus reset-btn" onClick={() => handleCount('minus')}>
                                <FiMinus />
                            </button>
                            <div className="count">{item?.quantity}</div>
                            <button className="plus reset-btn" onClick={() => handleCount('plus')}><GoPlus /></button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

