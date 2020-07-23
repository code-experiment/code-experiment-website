import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";

import api from "../helpers/api";
import ModalContext from "../contexts/ModalContext";
import Modal from "../helpers/Modal";

export default () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const {
    modalIsOpen,
    setModalIsOpen,
    setHeadingText,
    setContentText
  } = useContext(ModalContext)
  console.log(modalIsOpen)
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
      .then(() => {
        e.target.reset();
        setHeadingText("Success!")
        setContentText("You have successfully submitted the form.")
        setModalIsOpen(true)
        // alert("Submitted");
        setIsSubmitting(false);
      })
      .catch(() => {
        setHeadingText("Error")
        setContentText("Server possibly down")
        setModalIsOpen(true)
        // alert("Server possibly down");
        setIsSubmitting(false);
      });
  };

  return (
    <div className='contact-form-wrapper' id='Contact'>
      <h1 className='contact-form-header-text'>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='contact-form'>
        <input
          className='contact-form--input'
          type='text'
          placeholder='Name'
          name='name'
          ref={register({ required: "Required" })}
        />
        {errors.name && errors.name.message}

        <input
          className='contact-form--input'
          type='email'
          name='email'
          placeholder='Email'
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && errors.email.message}

        <textarea
          placeholder='Enter your question here.'
          className='contact-form--input'
          name='question'
          ref={register({ required: "Required" })}
        />
        {errors.question && errors.question.message}

        {isSubmitting ? (
          <button disabled className='contact-form-btn'>
            Submitting...
          </button>
        ) : (
          <button type='submit' className='contact-form-btn'>
            Submit
          </button>
        )}
      </form>
    </div>
  );
};
