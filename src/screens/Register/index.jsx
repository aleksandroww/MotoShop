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

const Register = () => {
  const { handleSubmit, register, errors } = useForm();
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
<<<<<<< HEAD
  const { user } = useContext(UserContext);
=======
>>>>>>> 707e4cf04287042bb4521bff7be322795b7f62c4

  const registerHandler = async (data) => {
    const { email, password } = data;

    try {
<<<<<<< HEAD
      await userService.register(email, password);
      await firebase.auth().currentUser.sendEmailVerification();
=======
      await user.register(email, password);
>>>>>>> 707e4cf04287042bb4521bff7be322795b7f62c4
      window.location = routes.login;
    } catch (error) {
      setError(error.message);

      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

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
      onChange: (e) => setPassword(e.target.value),
      validations: {
        required: 'Required',
        pattern: {
          value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
          message:
            "Minimum eight characters, at least one letter and one number! Doesn't allowed space between!!",
        },
      },
    },
    {
      type: 'password',
      name: 'rePassword',
      labelText: 'Repeat Password',
      validations: {
        required: 'Required',
        validate: (value) => value === password || "Password doesn't match",
      },
    },
  ];

<<<<<<< HEAD
  if (user) {
    return <Redirect to={routes.home} />;
  }

=======
>>>>>>> 707e4cf04287042bb4521bff7be322795b7f62c4
  return (
    <main className={styles.register}>
      <form onSubmit={handleSubmit(registerHandler)}>
        <h1>Register</h1>

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

        <p>{error}</p>

        <div className={styles.button}>
<<<<<<< HEAD
          <Button>Register</Button>
=======
          <Button>Submit</Button>
>>>>>>> 707e4cf04287042bb4521bff7be322795b7f62c4
        </div>
      </form>
    </main>
  );
};

export default Register;
