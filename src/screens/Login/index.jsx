// React and Style
import React, { useState, useContext } from 'react';
import styles from './index.module.css';

// Firebase
import firebase from 'firebase';

// Validations
import { useForm } from 'react-hook-form';

// Router and Routes
import { Redirect, Link } from 'react-router-dom';
import { routes } from 'constants/routes';

// Services
import { userService } from 'shared/services';

// Context
import { UserContext } from 'App';

// Components
import Button from 'shared/components/Button';
import Input from 'shared/components/Input';
import Loading from 'shared/components/Loading';

const Login = () => {
  const { handleSubmit, register, errors } = useForm();
  const { user } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginHandler = async (data) => {
    setLoading(true);

    const { email, password } = data;

    try {
      await userService.login(email, password);

      if (!firebase.auth().currentUser.emailVerified) {
        setError('You should verify your email first.');
        setLoading(false);
        return;
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);

      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  const handleResendVerification = async () => {
    await firebase.auth().currentUser.sendEmailVerification();
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
      validations: {
        required: 'Required',
      },
    },
  ];

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

        <p className={styles.error}>{error}</p>

        {error && error.includes('You should verify your email first.') && (
          <button onClick={handleResendVerification}>
            Resend email verification.
          </button>
        )}

        <div className={styles.button}>
          <Button>
            {loading ? (
              <Loading height={25} width={25} color='#fff' />
            ) : (
              'Login'
            )}
          </Button>
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
