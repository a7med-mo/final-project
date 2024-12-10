import { Form, Formik } from "formik";
import * as Yup from "yup";
import WrapperField from "../WrapperField/WrapperField";
import { Link } from "react-router-dom";

export default function LogInForm() {
    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });

    const onSubmit = (values) => {
        console.log("Form Values:", values);
    };

    return (
        <div className="box-login">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <h2>Login</h2>
                        <WrapperField
                            name="email"
                            title="Your Email Address"
                            isEmail
                            error={errors.email}
                            touched={touched.email}
                        />

                        <WrapperField
                            name="password"
                            title="Your Password"
                            isPassword
                            error={errors.password}
                            touched={touched.password}
                        />

                        <button
                            className="btn"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Login
                        </button>

                        <p>
                            Don&apos;t have an account? <Link to="/register">Sign Up</Link>
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
