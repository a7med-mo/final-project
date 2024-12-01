/* eslint-disable react/prop-types */

import { Formik } from "formik";
import WrapperField from "../WrapperField/WrapperField";
import { Form } from "react-router-dom";
import * as Yup from "yup";

export default function ViewOrderDetails({ dataCart, cartItems }) {

    const initialValues = { discountCode: "" };

    const validationSchema = Yup.object().shape({
        discountCode: Yup.string().required("Discount code is required"),
    });

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <>
            <div className="section-view-order-details">

                <div className="box-view-order-details">

                    {cartItems.map((item) => (
                        <div className="check-out-card" key={item.id}>
                            <div className="product">
                                <div className="box-img">
                                    <img src={item?.image} alt="" />
                                    <span>{item?.quantity}</span>
                                </div>
                                <div className="box-content">
                                    <h2>{item?.name}</h2>
                                    <h4>{item?.colorName} / {item?.size}</h4>
                                </div>
                            </div>

                            <div className="box-price">
                                <h3>${(item?.price * item?.quantity).toFixed(2)}</h3>
                            </div>
                        </div>
                    ))}

                    <div className="discount-code">
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}>

                            {({ errors, touched }) => (
                                <Form >
                                    <WrapperField
                                        className="discount-code-input"
                                        name="discountCode" title="Discount Code"
                                    />

                                    <button type="submit">Apply</button>
                                </Form>
                            )}
                        </Formik>
                    </div>

                    <div className="total-price">
                        <h4><span>Subtotal • {cartItems.reduce((total, item) => total + item.quantity, 0)} items</span><span>${dataCart.total}</span></h4>
                        <h4><span>Shipping</span><span>FREE</span></h4>
                        <h3><span>Total</span><span>${dataCart.total.toFixed(2)}</span></h3>
                    </div>
                </div>


            </div>
        </>
    )
}
