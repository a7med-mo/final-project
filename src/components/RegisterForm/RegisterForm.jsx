import { Form, Formik } from "formik";
import * as Yup from "yup";
import WrapperField from "../WrapperField/WrapperField";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabaseClient";
import { ShowToastSuccess } from "../ShowToastSuccess/ShowToastSuccess";
import bcrypt from "bcryptjs";
import { ShowToastError } from "../ShowToastError/ShowToastError ";

export default function RegisterForm() {
    const navigate = useNavigate();

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

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const { data: existingUser, error: fetchError } = await supabase
                .from("users")
                .select("*")
                .eq("email", values.email)
                .single();

            if (existingUser) {
                ShowToastError({ message: "Email already in use. Please log in." });
                setSubmitting(false);
                return;
            }

            const hashedPassword = await bcrypt.hash(values.password, 10);

            const { error: insertError } = await supabase.from("users").insert([{
                first_name: values.firstName,
                last_name: values.lastName,
                email: values.email,
                password: hashedPassword,
            }]);

            if (insertError) {
                ShowToastError({ message: "Registration failed. Please try again." });
                setSubmitting(false);
                return;
            }

            const { error: emailError } = await supabase.auth.api
                .sendMagicLinkEmail(values.email);

            if (emailError) {
                ShowToastError({ message: "Error sending verification link. Please try again." });
                setSubmitting(false);
                return;
            }

            ShowToastSuccess({ message: "Registration successful! Please check your email to verify your account." });
            resetForm();
            navigate("/login");
        } catch (error) {
            console.error("Registration error:", error);
            ShowToastError({ message: "An unexpected error occurred. Please try again." });
        } finally {
            setSubmitting(false);
        }
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
                            className={`btn ${isSubmitting ? "disabled" : ""}`}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Registering..." : "Register"}
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
