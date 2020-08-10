// React and Style
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

// Components
import Button from 'shared/components/Button';
import Input from 'shared/components/Input';

const Register = () => {
  const { handleSubmit, register, errors } = useForm();
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);

  const registerHandler = async (data) => {
    const { email, password } = data;

    try {
      await userService.register(email, password);
      await firebase.auth().currentUser.sendEmailVerification();
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

  if (user) {
    return <Redirect to={routes.home} />;
  }

  return (
    <main className={styles.register}>
      <form onSubmit={handleSubmit(registerHandler)}>
        <h1>Register</h1>

        {inputs.map((input, i) => (
          <div key={i}>
            <Input {...input} validations={register(input.validations)} />
            <p className={styles.error}>
              {errors[input.name] && errors[input.name].message}
            </p>
          </div>
        ))}

        <p>{error}</p>

        <div className={styles.button}>
          <Button>Register</Button>
        </div>
      </form>
    </main>
  );
};

export default Register;
