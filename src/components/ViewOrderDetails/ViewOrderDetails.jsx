/* eslint-disable react/prop-types */

import { Formik } from "formik";
import WrapperField from "../WrapperField/WrapperField";
import { Form } from "react-router-dom";


import { useEffect, useState } from "react";

export default function ViewOrderDetails({ cartItems }) {
    const [total, setTotal] = useState(0);


    useEffect(() => {
        const calculateTotal = () => {
            let total = 0;
            cartItems.forEach((item) => {
                total += item.price * item.quantity;
            });
            setTotal(total);
        };

        calculateTotal();
    }, [cartItems]);

    const onSubmit = (values) => {
        console.log("Applying discount:", values);
    };

    return (
        <div className="section-view-order-details">
            <div className="box-view-order-details">
                {cartItems.map((item, index) => (
                    <div className="check-out-card" key={index}>
                        <div className="product">
                            <div className="box-img">
                                <img src={item?.image} alt="" />
                                <span>{item?.quantity}</span>
                            </div>
                            <div className="box-content">
                                <h2>{item?.name}</h2>
                                <h4>
                                    {item?.colorName} / {item?.size}
                                </h4>
                            </div>
                        </div>
                        <div className="box-price">
                            <h3>${(item?.price * item?.quantity).toFixed(2)}</h3>
                        </div>
                    </div>
                ))}

                <div className="discount-code">
                    <Formik onSubmit={onSubmit}>
                        {() => (
                            <Form>
                                <WrapperField
                                    className="discount-code-input"
                                    title="Discount Code"
                                />
                                <button type="submit">Apply</button>
                            </Form>
                        )}
                    </Formik>
                </div>

                <div className="total-price">
                    <h4>
                        <span>
                            Subtotal • {cartItems.reduce((total, item) => total + item.quantity, 0)} items
                        </span>
                        <span>${total.toFixed(2)}</span>
                    </h4>
                    <h4>
                        <span>Shipping</span>
                        <span>FREE</span>
                    </h4>
                    <h3>
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </h3>
                </div>
            </div>
        </div>
    );
}


