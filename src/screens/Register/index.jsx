// React and Style
import React, { useState } from 'react';
import styles from './index.module.css';

// Validations
import { useForm } from 'react-hook-form';

// Routes
import { routes } from 'constants/routes';

// Services
import { user } from 'services';

// Components
import Button from 'shared/components/Button';
import Input from 'shared/components/Input';

const Register = () => {
  const { handleSubmit, register, errors } = useForm();
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const registerHandler = async (data) => {
    const { email, password } = data;

    try {
      await user.register(email, password);
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

  return (
    <main className={styles.register}>
      <form onSubmit={handleSubmit(registerHandler)}>
        <h1>Register</h1>

        {inputs.map((input, i) => (
          <div key={i}>
            <Input {...input} validations={register(input.validations)} />
            {errors[input.name] && errors[input.name].message}
          </div>
        ))}

        <p>{error}</p>

        <div className={styles.button}>
          <Button>Submit</Button>
        </div>
      </form>
    </main>
  );
};

export default Register;
