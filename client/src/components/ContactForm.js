import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";

import api from "../helpers/api";
import ModalContext from "../contexts/ModalContext";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const {
    setModalIsOpen,
    setModalHeadingText,
    setModalContentText,
  } = useContext(ModalContext);

  const onSubmit = (data, e) => {
    setIsSubmitting(true);
    JSON.stringify(data);
    api
      .post("/", {
        subject: "New Message From Website",
        name: data.name,
        email: data.email,
        text: data.question,
      })
      .then((res) => {
        if (res.data.status === "success") {
          e.target.reset();
          setModalHeadingText("Success!");
          setModalContentText("You have successfully submitted the form.");
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
      .catch(() => {
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
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <label htmlFor="namedInput" className="contact-form-label"> Name: </label>
          <input
            className="contact-form--input"
            type="text"
            placeholder="Name"
            name="name"
            ref={register({ required: "Required" })}
          />
          {errors.name && errors.name.type === "required" && (
            <span className="contact-form-error">This is required</span>
          )}

          <label htmlFor="emailInput" className="contact-form-label"> Email: </label>
          <input
            className="contact-form--input"
            type="email"
            name="email"
            placeholder="Email"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors.name && errors.name.type === "required" && (
            <span className="contact-form-error">This is required</span>
          )}
          
          <label htmlFor="questionInput" className="contact-form-label"> Question: </label>
          <textarea
            placeholder="Enter your question here."
            className="contact-form--input"
            name="question"
            ref={register({ required: "Required" })}
          />
          {errors.name && errors.name.type === "required" && (
            <span className="contact-form-error">This is required</span>
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
