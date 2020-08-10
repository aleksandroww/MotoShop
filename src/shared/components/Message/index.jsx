// React and style
import React from 'react';
import styles from './index.module.css';

function Message({ message }) {
  return (
    <header className={styles.header}>
      <span>{message}</span>
    </header>
  );
}

export default Message;
