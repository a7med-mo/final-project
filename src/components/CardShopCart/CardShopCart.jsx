/* eslint-disable react/prop-types */
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import EditCardShopCart from "../EditCardShopCart/MainEditCardShopCart/EditCardShopCart";


export default function CardShopCart({ index, item, deleteItem, editItem, product }) {

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

            } else {
                deleteItem(item.cartId, item?.quantity);
            }

        }
    };
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }


    return (
        <>
            <tr key={index}>
                <td className="td-product">
                    <div className="box-product">
                        <Link to={`/${item.id}/${item.name}`}>
                            <img src={item?.image} alt={item?.name} />
                        </Link>
                        <div className="box-content-product">
                            <Link to={`/${item.id}/${item.name}`}>{item.name}</Link>
                            <p>Color: <span>{item?.colorName}</span></p>
                            <p>Size: <span className="size">{item?.size}</span></p>
                            <div className="icons">
                                {isOpen ?
                                    <EditCardShopCart
                                        product={product}
                                        item={item}
                                        handleOpen={handleOpen}
                                        editItem={editItem}
                                        className="edit-active"
                                    /> : ''}
                                <span className="icon edit">
                                    <FiEdit onClick={handleOpen} />
                                </span>
                                <span className="icon delete" onClick={() => deleteItem(item.cartId)}>
                                    <RiDeleteBinLine />
                                </span>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="td-price">
                    <span>${item?.price}</span>
                </td>
                <td>
                        <div className="box-stock">
                            <button className="minus reset-btn" onClick={() => handleCount('minus')}>
                                {item?.quantity === 1 ? <RiDeleteBinLine /> : <FiMinus />}
                            </button>
                            <div className="count">{item?.quantity}</div>
                            <button className="plus reset-btn" onClick={() => handleCount('plus')}><GoPlus /></button>
                        </div>
                </td>
                <td className="td-total">
                    <span>${item?.price * count}</span>
                </td>
            </tr>
        </>
    )
}
