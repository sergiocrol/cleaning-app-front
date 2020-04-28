import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignupContainer, SignupForm } from './signup.styles';

const SignupUser = ({ value: { signup } }) => {
  // Handle state
  const [userCredentials, setCredentials] = useState({ email: '', password: '', confirmPassword: '', isCleaner: false });
  const [redirect, setRedirect] = useState(null);

  const { email, password, confirmPassword, isCleaner } = userCredentials;

  const handleInput = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  }

  // Handle form validations
  const { register, handleSubmit, errors, setError, getValues } = useForm();

  const onSubmit = event => {
    signup({ email, password, isCleaner })
      .then(res => {
        if (res.message) {
          setError('email', 'alreadyExists', 'This email already exists');
          return;
        };
        setRedirect('/');
      })
      .catch(error => console.log(error))
  }

  if (redirect) {
    return <Redirect to={redirect} />
  }

  return (
    <SignupContainer>
      <h3>Create your account</h3>
      <SignupForm onSubmit={handleSubmit(onSubmit)} noValidate autoComplete='off'>
        <FormInput
          type='email'
          name='email'
          onChange={handleInput}
          label='email'
          content={email}
          register={register}
          required='this field is required'
          pattern={{
            value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
            message: 'Must be a valid email'
          }}
          error={errors.email && errors.email.message}
        />
        <FormInput
          type='password'
          name='password'
          content={password}
          onChange={handleInput}
          label='password'
          register={register}
          required='this field is required'
          pattern={{
            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
            message: 'Password must contain: 1 capital letter, 1 lower case letter, 1 number and 1 special character'
          }}
          error={errors.password && errors.password.message}
        />
        <FormInput
          type='password'
          name='confirmPassword'
          onChange={handleInput}
          label='repeat password'
          content={confirmPassword}
          register={register}
          required='this field is required'
          validate={{
            matchesPreviousPassword: (value) => {
              const { password } = getValues();
              return password === value || `Passwords don't match`;
            },
          }}
          error={errors.confirmPassword && errors.confirmPassword.message}
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </SignupForm>
    </SignupContainer>
  );

}

export default SignupUser;