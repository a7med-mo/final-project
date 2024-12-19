/* eslint-disable react/prop-types */

import { IoMdClose } from "react-icons/io";
import EditProductColor from "../EditProductColor/EditProductColor";
import EditProductSize from "../EditProductSize/EditProductSize";
import EditProductCount from "../EditProductCount/EditProductCount";

export default function EditCardShopCart({ item, editItem, handleOpen, count, setCount }) {

    return (
        <div className="edit-popap">
            <div className="box-popap-edit">
                <span className="close-popap" onClick={handleOpen}>
                    <IoMdClose />
                </span>
                <div className="edit-popap-product">
                    <div className="box-image">
                        <img src={item?.image} alt={item?.name} />
                    </div>

                    <div className="box-content">
                        <h2>{item?.name}</h2>
                        <h4>${item?.price}</h4>
                    </div>
                </div>

                <EditProductColor item={item} />
                <EditProductSize item={item} />
                <EditProductCount item={item} editItem={editItem} count={count} setCount={setCount} />
            </div>
        </div>
    );
}
