/* eslint-disable react/prop-types */

import { Form, Formik } from "formik";
import { useState } from "react";
import WrapperField from "../../WrapperField/WrapperField";
import { IoMdClose } from "react-icons/io";
import Rating from "../../StarRating/Rating";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosConfig } from "../../../utils/axiosConfig";
import { useParams } from "react-router-dom";

export default function AddComment({ refetchReviews }) {
    const { id } = useParams();
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const queryClient = useQueryClient();

    const addNewReview = useMutation({
        mutationFn: (values) => axiosConfig({
            method: 'post',
            url: `/products/${id}/reviews`,
            data: values,
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['product', id] });
            refetchReviews();
            setOpen(false); 
            toast.success("Review submitted successfully!");
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "Failed to submit the review.", {
                style: {
                    fontSize: "16px",
                    border: "1px solid #e74c3c",
                    background: "#f8d7da",
                    padding: "14px",
                    color: "#e74c3c",
                },
            });
        },
    });

    const initialValues = {
        user: "",
        email: "",
        title: "",
        comment: "",
        quality: 0
    };

    const onSubmit = (values, { resetForm }) => {
        const postData = { ...values, createdAt: new Date().toISOString() };
        addNewReview.mutate(postData);  
        resetForm();
    };

    const validationSchema = Yup.object({
        user: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        title: Yup.string().required("Title is required"),
        comment: Yup.string().required("Comment is required"),
        quality: Yup.number().min(1, "Please rate the quality").required("Rating is required"),
    });

    return (
        <>
            <button className="btn-review reset-btn" onClick={handleOpen}>
                Write a Review
            </button>

            {open && (
                <div className="add-comment">
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        {({ errors, touched, setFieldValue, values }) => (
                            <Form className="add-comment-form">
                                <h2 className="title">Rate Us</h2>
                                <span>
                                    <IoMdClose className="close" onClick={handleOpen} />
                                </span>

                                <div className="box-rate">
                                    <span>Quality</span>
                                    <Rating
                                        rating={values.quality}
                                        setRating={(value) => setFieldValue("quality", value)}
                                        name={"quality"}
                                    />
                                    {errors.quality && touched.quality && (
                                        <div className="error">{errors.quality}</div>
                                    )}
                                </div>

                                <WrapperField
                                    name={"user"}
                                    title={"Your Name"}
                                    error={errors.user}
                                    touched={touched.user}
                                />
                                <WrapperField
                                    name={"email"}
                                    title={"Your Email"}
                                    isEmail={true}
                                    error={errors.email}
                                    touched={touched.email}
                                />
                                <WrapperField
                                    name={"title"}
                                    title={"Title"}
                                    error={errors.title}
                                    touched={touched.title}
                                />
                                <WrapperField
                                    name={"comment"}
                                    title={"Your Comment"}
                                    textarea
                                    error={errors.comment}
                                    touched={touched.comment}
                                />

                                <button
                                    className={"btn btn-primary"}
                                    type={"submit"}
                                    disabled={addNewReview.isLoading}
                                >
                                    {addNewReview.isLoading ? "Submitting..." : "Submit"}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            )}
        </>
    );
}
