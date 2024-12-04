/* eslint-disable react/prop-types */

import {  Field } from "formik";
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
            {error && touched && <span className="error">{error}</span>}
        </div>
    );
}
