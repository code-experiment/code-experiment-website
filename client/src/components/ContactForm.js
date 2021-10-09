import React, { useState, useContext } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

import ModalContext from "../contexts/ModalContext";

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { setModalIsOpen, setModalHeadingText, setModalContentText } =
        useContext(ModalContext);

    const onSubmit = (data, e) => {
        setIsSubmitting(true);
        emailjs
            .send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                {
                    name: data.name,
                    email: data.email,
                    question: data.question,
                },
                process.env.REACT_APP_USER_ID
            )
            .then((response) => {
                if (response.status === 200) {
                    e.target.reset();
                    setModalHeadingText("Success!");
                    setModalContentText(
                        "You have successfully submitted the form."
                    );
                    setModalIsOpen(true);
                    setIsSubmitting(false);
                } else {
                    setModalHeadingText("UNSUCCESSFUL!");
                    setModalContentText(
                        "It seems like our mail server is down.  Please try again later"
                    );
                    setModalIsOpen(true);
                    setIsSubmitting(false);
                }
            })
            .catch((error) => {
                console.log("FAILED...", error);
                setModalHeadingText("Error");
                setModalContentText("Server possibly down");
                setModalIsOpen(true);
                setIsSubmitting(false);
            });
    };

    return (
        <div className="contact-form-wrapper">
            <div className="contact-form-container container" id="Contact">
                <h1 className="contact-form-header-text">Contact Us</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="contact-form"
                >
                    <label htmlFor="namedInput" className="contact-form-label">
                        Name:
                    </label>
                    <input
                        className="contact-form--input"
                        id="namedInput"
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: "Required" })}
                    />
                    {errors.name && errors.name.type === "required" && (
                        <span className="contact-form-error">
                            This is required
                        </span>
                    )}
                    <label htmlFor="emailInput" className="contact-form-label">
                        Email:
                    </label>
                    <input
                        className="contact-form--input"
                        id="emailInput"
                        type="email"
                        {...register("email", {
                            required: "Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address",
                            },
                        })}
                        placeholder="Email"
                    />
                    {errors.name && errors.name.type === "required" && (
                        <span className="contact-form-error">
                            This is required
                        </span>
                    )}
                    <label
                        htmlFor="questionInput"
                        className="contact-form-label"
                    >
                        Question:
                    </label>
                    <textarea
                        placeholder="Enter your question here."
                        id="questionInput"
                        className="contact-form--input"
                        {...register("question", { required: "Required" })}
                    />
                    {errors.name && errors.name.type === "required" && (
                        <span className="contact-form-error">
                            This is required
                        </span>
                    )}

                    {isSubmitting ? (
                        <button disabled className="contact-form-btn">
                            Submitting...
                        </button>
                    ) : (
                        <button type="submit" className="contact-form-btn">
                            Submit
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
