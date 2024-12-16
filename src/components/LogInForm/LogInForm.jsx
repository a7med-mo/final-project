import { Form, Formik } from "formik";
import * as Yup from "yup";
import WrapperField from "../WrapperField/WrapperField";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../../utils/supabaseClient";
import { ShowToastSuccess } from "../ShowToastSuccess/ShowToastSuccess";
import { useState } from "react";
import { ShowToastError } from "../ShowToastError/ShowToastError ";

export default function LogInForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const [userData, setUserData] = useState(null);

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
    const onSubmit = async (values, { setSubmitting }) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: values.email,
                password: values.password,
            });

            if (error) {
                ShowToastError({ message: error.message || "Invalid email or password." });
                setSubmitting(false);
                return;
            }

            const { data: userData, error: fetchError } = await supabase
                .from("users")
                .select("*")
                .eq("email", values.email)
                .single();

            if (fetchError || !userData) {
                ShowToastError({ message: "Unable to fetch user data. Please try again." });
                setSubmitting(false);
                return;
            }

            if (!userData.email_confirmed_at) {
                ShowToastError({
                    message: "Please verify your email address before logging in.",
                });
                setSubmitting(false);
                return;
            }

            setUserData(userData);

            ShowToastSuccess({ message: `Login successful! Welcome, ${userData.first_name}` });

            const redirectTo = location.state?.from || "/";
            navigate(redirectTo);
        } catch (error) {
            console.error("Login error:", error);
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
                            {isSubmitting ? <span>Loading...</span> : "Login"}
                        </button>
                        <p>
                            Don&apos;t have an account?{" "}
                            <Link to="/register">Sign Up</Link>
                        </p>
                    </Form>
                )}
            </Formik>

            {userData && (
                <div>
                    <h3>Welcome, {userData.first_name}!</h3>
                </div>
            )}
        </div>
    );
}
