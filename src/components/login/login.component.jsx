import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { UserTypeContainer, UserTypeTitle, UserTypeSubtitle, SignupForm, FormContainer } from '../signup/signup.styles';

const Login = ({ value: { login } }) => {
  // Handle state
  const [userCredentials, setCredentials] = useState({ email: '', password: '' });
  const [redirect, setRedirect] = useState(null);

  const { email, password } = userCredentials;

  // Handle form validations
  const { register, handleSubmit, errors, setError } = useForm();

  const handleInput = event => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  }

  const onSubmit = event => {
    login({ email, password })
      .then(res => {
        setRedirect('/');
      })
      .catch(error => {
        setError('email', 'notMatch', 'Incorrect email and/or password');
      })
  }

  if (redirect) {
    return <Redirect to={redirect} />
  }

  return (
    <UserTypeContainer>
      <UserTypeTitle>Welcome to maemae</UserTypeTitle>
      <UserTypeSubtitle>Enter your credentials and enjoy being part of our community</UserTypeSubtitle>
      <SignupForm onSubmit={handleSubmit(onSubmit)} noValidate autoComplete='off'>
        <FormContainer>
          <FormInput
            type='email'
            name='email'
            onChange={handleInput}
            label='email'
            content={email}
            placeholder='email'
            register={register}
            required='this field is required'
            pattern={{ value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, message: 'Must be a valid email' }}
            error={errors.email && errors.email.message}
          />
          <FormInput
            type='password'
            name='password'
            onChange={handleInput}
            label='password'
            content={password}
            placeholder='password'
            register={register}
            required='this field is required'
            error={errors.password && errors.password.message}
          />
        </FormContainer>
        <CustomButton type='submit'>sign in</CustomButton>
      </SignupForm>
    </UserTypeContainer>
  );

}

export default Login;