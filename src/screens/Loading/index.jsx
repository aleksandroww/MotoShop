// React and Style
import React from 'react';
import styles from './index.module.css';

// Loading
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <main className={styles.loading}>
      <div>
        <ReactLoading type='spin' color='#214c78' width={50} height={50} />
      </div>
    </main>
  );
};

export default Loading;
