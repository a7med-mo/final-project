import { Formik, Form } from "formik";
import * as Yup from "yup";
import WrapperField from "../WrapperField/WrapperField";
import CountryDropdown from "../CountryDropdown/CountryDropdown";
import Payment from "../Payment/Payment";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import InternationalShipping from "../InternationalShipping/InternationalShipping";
import { supabase } from "../../utils/supabaseClient";

export default function CheckoutForm() {

    const [checked, setChecked] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const initialValues = {
        emailORphone: "",
        country: null,
        firstName: "",
        lastName: "",
        address: "",
        apartment: "",
        city: "",
        postalCode: "",
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        emailORphone: Yup.string()
            .required("Required")
            .test(
                "email-or-phone",
                "Please enter a valid email or phone number",
                function (value) {
                    if (!value) return false;
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    const phoneRegex = /^[0-9]{10,15}$/;
                    return emailRegex.test(value) || phoneRegex.test(value);
                }
            ),
        country: Yup.object()
            .shape({
                label: Yup.string().required("Country is required"),
                value: Yup.string().required("Country is required"),
            })
            .nullable()
            .required("Country is required"),
        address: Yup.string().required("Required"),
        apartment: Yup.string(),
        city: Yup.string().required("Required"),
        postalCode: Yup.string()
            .matches(/^\d{5}$/, "Enter a valid postal code")
            .required("Required"),
    });

    const onSubmit = (values) => {
        console.log("Form Values:", values);
    };

    const handleCheckboxChange = () => {
        setChecked((prev) => !prev);
    };

    useEffect(() => {
        const { subscription } = supabase.auth.onAuthStateChange((event, session) => {
            setIsLoggedIn(!!session);
        });

        return () => {
            if (subscription) subscription.unsubscribe();
        };
    }, []);

    return (
        <div className="section-enter-user-data">

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="box-user-name">
                            <div className="box-user-name-title">
                                <h2>Contact</h2>
                                {!isLoggedIn && <Link to="/login">Login</Link>}
                            </div>
                            <WrapperField
                                name="firstName"
                                title="First Name"
                                error={errors.firstName}
                                touched={touched.firstName}
                            />
                            <WrapperField
                                name="lastName"
                                title="Last Name"
                                error={errors.lastName}
                                touched={touched.lastName}
                            />


                        </div>

                        <WrapperField
                            name="emailORphone"
                            title="Email or Mobile Phone Number"
                            isEmail
                            error={errors.emailORphone}
                            touched={touched.emailORphone}
                        />
                        <div className="section-checkBox">
                            <div
                                className={`checkbox${checked ? " active" : ""}`}
                                onClick={handleCheckboxChange}
                            >
                                <FaCheck />
                            </div>
                            <label>Email me with news and offers</label>
                        </div>
                        <CountryDropdown name="country" />

                        <WrapperField
                            name="address"
                            title="Address"
                            error={errors.address}
                            touched={touched.address}
                        />
                        <WrapperField
                            name="apartment"
                            title="Apartment, Suite, etc. (Optional)"
                        />
                        <div className="box-user-address-city">
                            <WrapperField
                                name="city"
                                title="City"
                                error={errors.city}
                                touched={touched.city}
                            />
                            <WrapperField
                                name="postalCode"
                                title="Postal Code"
                                error={errors.postalCode}
                                touched={touched.postalCode}
                            />
                        </div>

                        <InternationalShipping />

                        <div className="Payment">
                            <Payment />

                            <button
                                type="submit"
                                className="btn-submit-checkout-form"
                            >
                                Pay now
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>

            <div className="footer">
                <p>All rights reserved Elessi</p>
            </div>
        </div>
    );
}
