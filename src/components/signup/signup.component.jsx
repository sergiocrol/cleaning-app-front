import React from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { useInputChange } from '../helpers/input-change.component';

import { SignupContainer, SignupForm, UserIcon, UserSelector } from './signup.styles';

const Signup = ({ value: { signup } }) => {

  // Handle state
  const initialState = {
    email: '',
    password: '',
    confirmPassword: '',
    isCleaner: false,
    redirect: null
  }

  const [state, setState] = useInputChange(initialState);

  const { email, password, confirmPassword, isCleaner, redirect } = state;

  const handleInput = event => {
    setState({ field: event.target.name, value: event.target.value });
  }

  const handleChange = event => {
    setState({ field: 'isCleaner', value: !isCleaner });
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
        setState({ field: 'redirect', value: '/homepage' })
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
        <UserSelector>
          <UserIcon>
            <input type="radio" name="isCleaner" onChange={handleChange} checked={!isCleaner} />
            <span>USER</span>
          </UserIcon>

          <UserIcon>
            <input type="radio" name="isCleaner" onChange={handleChange} checked={isCleaner} />
            <span>CLEANER</span>
          </UserIcon>
        </UserSelector>
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </SignupForm>
    </SignupContainer>
  );

}

export default Signup;