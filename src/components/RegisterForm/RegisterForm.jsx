import { Form, Formik } from "formik";
import * as Yup from "yup";
import WrapperField from "../WrapperField/WrapperField";
import { Link } from "react-router-dom";

export default function RegisterForm() {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(2, "First name must be at least 2 characters")
            .max(50, "First name must be 50 characters or less")
            .required("First name is required"),
        lastName: Yup.string()
            .min(2, "Last name must be at least 2 characters")
            .max(50, "Last name must be 50 characters or less")
            .required("Last name is required"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
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
                        <h2>Register</h2>
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
                        <WrapperField
                            name="confirmPassword"
                            title="Confirm Your Password"
                            isPassword
                            error={errors.confirmPassword}
                            touched={touched.confirmPassword}
                        />
                        <button
                            className="btn"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Register
                        </button>
                        <p>
                            Already have an account? <Link to="/login">Log In</Link>
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
