import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import CustomSlider from '../custom-slider/custom-slider.component';
import SpinnerButton from '../spinner-button/spinner-button.component';

import { SignupForm, UserTypeTitle, UserTypeContainer, UserTypeSubtitle } from './signup.styles';

const SignupCleaner = ({ value: { signup } }) => {
  const [isLoading, setLoading] = useState(false);
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    city: '',
    fee: 10,
    isCleaner: true
  });
  const [redirect, setRedirect] = useState(null);

  const { email, password, confirmPassword, firstName, lastName, city, fee, isCleaner } = userCredentials;

  const handleInput = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  }

  // Handle form validations
  const { register, handleSubmit, errors, setError, getValues } = useForm();

  const onSubmit = event => {
    setLoading(true);
    signup({ email, password, firstName, lastName, fee, city, isCleaner })
      .then(res => {
        if (res.message) {
          setLoading(false);
          setError('email', 'alreadyExists', 'This email already exists');
          return;
        };
        setLoading(false);
        setRedirect('/login');
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      })
  }

  if (redirect) {
    return <Redirect to={redirect} />
  }

  return (
    <UserTypeContainer>
      <UserTypeTitle><Link to='/'>&#10092;</Link>Welcome to maemae</UserTypeTitle>
      <UserTypeSubtitle>Great! Just the last step to be part of our community as cleaner</UserTypeSubtitle>
      <SignupForm onSubmit={handleSubmit(onSubmit)} noValidate autoComplete='off'>
        <FormInput
          name='firstName'
          onChange={handleInput}
          label='first name'
          placeholder='first name'
          register={register}
          required='this field is required'
          error={errors.firstName && errors.firstName.message}
        />
        <FormInput
          name='lastName'
          onChange={handleInput}
          label='last name'
          content={lastName}
          placeholder='last name'
          placeholderTextColor='blue'
          register={register}
          required='this field is required'
          error={errors.lastName && errors.lastName.message}
        />
        <FormInput
          type='email'
          name='email'
          onChange={handleInput}
          label='email'
          content={email}
          placeholder='email'
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
          placeholder='password'
          register={register}
          required='this field is required'
          pattern={{
            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
            message: '1 cap. letter | 1 lower case | 1 numb. | 1 sp. character'
          }}
          error={errors.password && errors.password.message}
        />
        <FormInput
          type='password'
          name='confirmPassword'
          onChange={handleInput}
          label='repeat password'
          placeholder='confirm password'
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
        <FormInput
          name='city'
          onChange={handleInput}
          label='city'
          content={city}
          placeholder='city'
          register={register}
          required='this field is required'
          error={errors.city && errors.city.message}
        />
        <CustomSlider type="range" min="10" max="100" name="fee" value={fee} onChange={handleInput} />
        <CustomButton type='submit'>{isLoading ? <SpinnerButton /> : 'sign up'}</CustomButton>
      </SignupForm>
    </UserTypeContainer>
  );

}

export default SignupCleaner;