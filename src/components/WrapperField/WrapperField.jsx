/* eslint-disable react/prop-types */

import {  Field } from "formik";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { BiSolidError } from "react-icons/bi";

export default function WrapperField({ name, title, error, touched, isPassword, isEmail, textarea }) {

    const inputType = isPassword ? "password" : isEmail ? "email" : "text";
    const inputClass = error && touched ? "errorInput" : "";

    return (
        <div className="wrapperField-input">
            <Field
                as={textarea ? "textarea" : "input"}
                type={inputType}
                name={name}
                placeholder={title}
                className={inputClass}
            />
            {error && touched && <BiSolidError />}

            {useEffect(() => {
                if (error) {
                    toast.error(`${error}`, {
                        style: {
                            fontSize: '14px',
                            border: '1px solid #ee5353',
                            background: '#f8e6e6',
                            color: '#ee5353',
                        }
                    });
                }
            }, [error])}

        </div>
    );
}
