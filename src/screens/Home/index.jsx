// React and style
import React from 'react';
import styles from './index.module.css';

// Components
import Search from 'shared/components/Search';

function Home() {
  return (
    <main className={styles['home-screen']}>
      <div className={styles['upper-section']}>
        <div>
          <Search />
        </div>
      </div>
    </main>
  );
}

export default Home;
