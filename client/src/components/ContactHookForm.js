import React from "react";
import { useForm } from "react-hook-form";

export default () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    e.target.reset();
    console.log(data);
    console.log(errors);
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
          placeholder='email@noreply.com'
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

        <button type='submit' className='contact-form-btn'>
          Submit
        </button>
      </form>
    </div>
  );
};
