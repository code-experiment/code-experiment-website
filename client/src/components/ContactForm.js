import React from "react";
import { useForm } from "react-hook-form";

import api from "../helpers/api";

// Items we need for axios call
// subject: req.body.subject,
// text: `
//   from: ${req.body.name}
//   contact: ${req.body.email}
//   message: ${req.body.text}

export default () => {
  const { register, handleSubmit, errors, formState } = useForm();
  const { isSubmitting } = formState;
  const onSubmit = (data, e) => {
    JSON.stringify(data);
    api.post("/", {
      subject: "New Message From Website",
      name: data.name,
      email: data.email,
      text: data.question,
    });
    e.target.reset();
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

        <input
          className='contact-form--input'
          name='question'
          type='textarea'
          placeholder='Enter your question here.'
          ref={register({ required: "Required" })}
        />
        {errors.question && errors.question.message}

        {isSubmitting ? (
          <button disabled type='button' className='contact-form-btn'>
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
