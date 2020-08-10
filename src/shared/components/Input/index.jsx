// React and style
import React from 'react';
import styles from './index.module.css';

function Input({ name, type, labelText, validations, onChange }) {
  return (
    <section className={styles.container}>
      <label htmlFor={name}>{labelText}</label>
      <input
        name={name}
        type={type}
        id={name}
        ref={validations}
        onChange={onChange}
      />
    </section>
  );
}

export default Input;
