// React and style
import React from 'react';
import styles from './index.module.css';

// Components
import SearchForm from 'shared/components/SearchForm';

function Home() {
  return (
    <main className={styles['home-screen']}>
      <div className={styles['upper-section']}>
        <div className={styles.search}>
          <SearchForm />
        </div>
      </div>
    </main>
  );
}

export default Home;
