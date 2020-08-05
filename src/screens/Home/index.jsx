import React from 'react';
import styles from './index.module.css';

function Home() {
    return (
        <main className={styles['home-screen']}>
            <h1 className={styles.heading}>Home Screen!</h1>
        </main>
    )
}

export default Home;