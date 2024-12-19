import { Form, Formik } from "formik";
import * as Yup from "yup";
import WrapperField from "../WrapperField/WrapperField";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabaseClient";
import { ShowToastSuccess } from "../ShowToastSuccess/ShowToastSuccess";
import { useState } from "react";
import { ShowToastError } from "../ShowToastError/ShowToastError ";

export default function LogInForm() {
    const navigate = useNavigate();
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
                ShowToastError({ message: "Invalid email or password." });
                setSubmitting(false);
                return;
            }

            const { data: user, error: userError } = await supabase
                .from("users")
                .select("*")
                .eq("email", values.email)
                .single();

            if (userError || !user) {
                ShowToastError({ message: "Unable to fetch user data. Please try again." });
                setSubmitting(false);
                return;
            }

            setUserData(user);
            ShowToastSuccess({ message: `Welcome back, ${user.first_name}!` });
            navigate("/");
        } catch (error) {
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
                            {isSubmitting ? "Loading..." : "Login"}
                        </button>
                        <p>
                            Don't have an account? <Link to="/register">Sign Up</Link>
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
