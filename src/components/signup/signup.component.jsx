import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './signup.styles.scss';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    isCleaner: false,
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
    isChecked: true,
    redirect: null
  }

  formValidations = () => {
    const { email, password, confirmPassword } = this.state;
    let isValid = true;

    const requiredField = () => {
      if (!email || !password || !confirmPassword) {
        if (!email) this.setState({ emailError: 'This field must be completed' });
        if (!password) this.setState({ passwordError: 'This field must be completed' });
        if (!confirmPassword) this.setState({ confirmPasswordError: 'This field must be completed' });
        isValid = false;
      }
      return isValid;
    }

    const validEmail = () => {
      const validEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
      if (!validEmail.exec(email)) {
        this.setState({ emailError: 'Must be a valid email' });
        isValid = false;
      }
      return isValid;
    }

    const passwordsMatch = () => {
      if (password !== confirmPassword) {
        this.setState({
          passwordError: `Passwords don't match`,
          confirmPasswordError: `Passwords don't match`
        });
        isValid = false;
      }
      return isValid;
    }

    const validPassword = () => {
      const validPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
      if (!validPassword.exec(password)) {
        this.setState({ passwordError: 'Password must contain: 1 capital letter, 1 lower case letter, 1 number and 1 special character' });
        isValid = false;
      }
      return isValid;
    }

    return {
      requiredField,
      validEmail,
      passwordsMatch,
      validPassword
    }

  }

  handleInput = event => {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleChange = event => {
    this.setState({
      isCleaner: !this.state.isCleaner
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    const { value: { signup } } = this.props;
    const { email, password, isCleaner } = this.state;
    const formValidations = this.formValidations();

    this.setState({
      emailError: '',
      passwordError: '',
      confirmPasswordError: ''
    })

    if (!formValidations.requiredField()) return;
    if (!formValidations.validEmail()) return;
    if (!formValidations.passwordsMatch()) return;
    if (!formValidations.validPassword()) return;

    signup({ email, password, isCleaner })
      .then((user) => {
        this.setState({
          redirect: '/homepage'
        })
      })
      .catch(error => console.log(error))

  }

  render() {
    const { email, password, confirmPassword, isCleaner, emailError, passwordError, confirmPasswordError, redirect } = this.state;

    if (redirect) {
      return <Redirect to={redirect} />
    }

    return (
      <div className='signup'>
        <h3>Create your account</h3>
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleInput}
            label='email'
            error={emailError}
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleInput}
            label='password'
            error={passwordError}
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleInput}
            label='repeat password'
            error={confirmPasswordError}
          />
          <div className='user-selector'>
            <label className='user-icon'>
              <input type="radio" name="isCleaner" onChange={this.handleChange} checked={!isCleaner} />
              <span>USER</span>
            </label>

            <label className='user-icon'>
              <input type="radio" name="isCleaner" onChange={this.handleChange} checked={isCleaner} />
              <span>CLEANER</span>
            </label>
          </div>
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default Signup;