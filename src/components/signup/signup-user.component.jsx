import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import SpinnerButton from '../spinner-button/spinner-button.component';

import {
  UserTypeContainer,
  UserTypeTitle,
  UserTypeSubtitle,
  SignupForm,
  FormContainer,
} from './signup.styles';

const SignupUser = ({ value: { signup } }) => {
  const [isLoading, setLoading] = useState(false);
  const [userCredentials, setCredentials] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    isCleaner: false,
  });
  const [redirect, setRedirect] = useState(null);

  const {
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    isCleaner,
  } = userCredentials;

  const handleInput = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  // Handle form validations
  const { register, handleSubmit, errors, setError, getValues } = useForm();

  const onSubmit = (event) => {
    setLoading(true);
    signup({ email, password, firstName, lastName, isCleaner })
      .then((res) => {
        if (res.message) {
          setLoading(false);
          setError('email', 'alreadyExists', 'This email already exists');
          return;
        }
        setLoading(false);
        setRedirect('/login');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <UserTypeContainer>
      <UserTypeTitle>
        <Link to="/">&#10092;</Link>Welcome to maemae
      </UserTypeTitle>
      <UserTypeSubtitle>
        Great! Just the last step to be part of our community as user
      </UserTypeSubtitle>
      <SignupForm
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        autoComplete="off"
      >
        <FormContainer>
          <FormInput
            name="firstName"
            onChange={handleInput}
            label="first name"
            content={firstName}
            placeholder="first name"
            register={register}
            required="this field is required"
            error={errors.firstName && errors.firstName.message}
          />
          <FormInput
            name="lastName"
            onChange={handleInput}
            label="last name"
            content={lastName}
            placeholder="last name"
            placeholderTextColor="blue"
            register={register}
            required="this field is required"
            error={errors.lastName && errors.lastName.message}
          />
          <FormInput
            type="email"
            name="email"
            onChange={handleInput}
            label="email"
            content={email}
            placeholder="email"
            register={register}
            required="this field is required"
            pattern={{
              value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
              message: 'Must be a valid email',
            }}
            error={errors.email && errors.email.message}
          />
          <FormInput
            type="password"
            name="password"
            content={password}
            onChange={handleInput}
            label="password"
            placeholder="password"
            register={register}
            required="this field is required"
            pattern={{
              value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
              message:
                '1 cap. letter | 1 lower case | 1 numb. | 1 sp. character',
            }}
            error={errors.password && errors.password.message}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            onChange={handleInput}
            label="repeat password"
            content={confirmPassword}
            placeholder="confirm password"
            register={register}
            required="this field is required"
            validate={{
              matchesPreviousPassword: (value) => {
                const { password } = getValues();
                return password === value || `Passwords don't match`;
              },
            }}
            error={errors.confirmPassword && errors.confirmPassword.message}
          />
        </FormContainer>
        <CustomButton type="submit">
          {isLoading ? <SpinnerButton /> : 'sign up'}
        </CustomButton>
      </SignupForm>
    </UserTypeContainer>
  );
};

export default SignupUser;
