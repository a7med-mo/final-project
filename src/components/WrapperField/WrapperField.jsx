import { ErrorMessage, Field } from "formik";
import ErrorInput from "./ErrorInput";

// eslint-disable-next-line react/prop-types
export default function WrapperField({ name, title, error, touched, isPassword }) {
    return (
        <>
            <div className="wrapperField-input">

                {isPassword && (
                    <>
                        <Field type="password" name={name} placeholder={title} className={error && touched ? "errorInput" : ""} />
                        <ErrorMessage name={name} component={ErrorInput} />
                    </>
                )}

                {!isPassword && (
                    <>
                        <Field name={name} placeholder={title} className={error && touched ? "errorInput" : ""} />
                        <ErrorMessage name={name} component={ErrorInput} />
                    </>
                )}

            </div>
        </>
    )
}
