// React and Style
<<<<<<< HEAD
import React, { useState, useContext } from 'react';
import styles from './index.module.css';

// Firebase
import firebase from 'firebase';

// Validations
import { useForm } from 'react-hook-form';

// Router and Routes
import { Redirect } from 'react-router-dom';
import { routes } from 'constants/routes';

// Services
import { userService } from 'services';

// Context
import { UserContext } from 'App';
=======
import React, { useState } from 'react';
import styles from './index.module.css';

// Validations
import { useForm } from 'react-hook-form';

// Routes
import { routes } from 'constants/routes';

// Services
import { user } from 'services';
>>>>>>> 707e4cf04287042bb4521bff7be322795b7f62c4

// Components
import Button from 'shared/components/Button';
import Input from 'shared/components/Input';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 707e4cf04287042bb4521bff7be322795b7f62c4

const Login = () => {
  const { handleSubmit, register, errors } = useForm();
  const [error, setError] = useState(null);
<<<<<<< HEAD
  const { user } = useContext(UserContext);
=======
>>>>>>> 707e4cf04287042bb4521bff7be322795b7f62c4

  const inputs = [
    {
      type: 'email',
      name: 'email',
      labelText: 'Email',
      validations: {
        required: 'Required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid email address!',
        },
      },
    },
    {
      type: 'password',
      name: 'password',
      labelText: 'Password',
      validations: {
        required: 'Required',
<<<<<<< HEAD
=======
        pattern: {
          value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
          message:
            "Minimum eight characters, at least one letter and one number! Doesn't allowed space between!!",
        },
>>>>>>> 707e4cf04287042bb4521bff7be322795b7f62c4
      },
    },
  ];

  const loginHandler = async (data) => {
    const { email, password } = data;

    try {
<<<<<<< HEAD
      await userService.login(email, password);

      if (!firebase.auth().currentUser.emailVerified) {
        setError('You should verify your email first.');
        return;
      }
=======
      await user.login(email, password);
      window.location = routes.home;
>>>>>>> 707e4cf04287042bb4521bff7be322795b7f62c4
    } catch (error) {
      setError(error.message);

      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };
<<<<<<< HEAD

  const handleResendVerification = async () => {
    await firebase.auth().currentUser.sendEmailVerification();
  };

  if (user) {
    return <Redirect to={routes.home} />;
  }
=======
>>>>>>> 707e4cf04287042bb4521bff7be322795b7f62c4

  return (
    <main className={styles.login}>
      <form onSubmit={handleSubmit(loginHandler)}>
        <h1>Login</h1>

        {inputs.map((input, i) => (
          <div key={i}>
            <Input {...input} validations={register(input.validations)} />
<<<<<<< HEAD
            <p className={styles.error}>
              {errors[input.name] && errors[input.name].message}
            </p>
=======
            {errors[input.name] && errors[input.name].message}
>>>>>>> 707e4cf04287042bb4521bff7be322795b7f62c4
          </div>
        ))}

        {error}
<<<<<<< HEAD
        {error && error.includes('You should verify your email first.') && (
          <button onClick={handleResendVerification}>
            Resend email verification.
          </button>
        )}

        <div className={styles.button}>
          <Button>Login</Button>
        </div>

        <hr />

        <div className={styles.option}>
          <Link to={routes.register}>Don't have registration?</Link>
=======

        <div className={styles.button}>
          <Button>Submit</Button>
>>>>>>> 707e4cf04287042bb4521bff7be322795b7f62c4
        </div>
      </form>
    </main>
  );
};

export default Login;
