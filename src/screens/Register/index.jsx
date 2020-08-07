import React, { useState } from 'react';
// import styles from './index.module.css';
import { useForm } from 'react-hook-form';

const Register = () => {
  const { handleSubmit, register, errors } = useForm();
  const [password, setPassword] = useState(0);
  const handler = (e) => console.log(e);
  
  return (
    <form onSubmit={handleSubmit(handler)}>
      <label>Email: </label>
      <input
        name="email"
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address!',
          },
        })}
      />
      {errors.email && errors.email.message}

      <label>Username: </label>
      <input
        name="username"
        ref={register({
          required: 'Required',
          pattern: {
            value: /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/i,
            message: 'Invalid username!',
          },
        })}
      />
      {errors.username && errors.username.message}

      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        type="password"
        ref={register({
          required: 'Required',
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
            message:
              "Minimum eight characters, at least one letter and one number! Doesn't allowed space between!!",
          },
        })}
      />
      {errors.password && errors.password.message}

      <label>Re-Password</label>
      <input
        onChange={(e) => console.log(password)}
        name="rePassword"
        type="password"
        ref={register({
          required: 'Required',
          validate: (value) => value === password || "Password doesn't match",
        })}
      />
      {errors.rePassword && errors.rePassword.message}

      <button>Submit</button>
    </form>
  );
};

export default Register;
