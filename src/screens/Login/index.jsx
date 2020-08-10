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
import { Link } from 'react-router-dom';

const Login = () => {
  const { handleSubmit, register, errors } = useForm();
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);

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
      },
    },
  ];

  const loginHandler = async (data) => {
    const { email, password } = data;

    try {
      await userService.login(email, password);

      if (!firebase.auth().currentUser.emailVerified) {
        setError('You should verify your email first.');
        return;
      }
    } catch (error) {
      setError(error.message);

      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  const handleResendVerification = async () => {
    await firebase.auth().currentUser.sendEmailVerification();
  };

  if (user) {
    return <Redirect to={routes.home} />;
  }

  return (
    <main className={styles.login}>
      <form onSubmit={handleSubmit(loginHandler)}>
        <h1>Login</h1>

        {inputs.map((input, i) => (
          <div key={i}>
            <Input {...input} validations={register(input.validations)} />
            <p className={styles.error}>
              {errors[input.name] && errors[input.name].message}
            </p>
          </div>
        ))}

        {error}
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
        </div>
      </form>
    </main>
  );
};

export default Login;
