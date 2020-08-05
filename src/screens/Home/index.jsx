// React and style
import React from 'react';
import styles from './index.module.css';

// Components
import Search from 'shared/components/Search';

// to do home page with only one div or something with the weather!

function Home() {
    return (
        <main className={styles['home-screen']}>
            <Search />
        </main>
    )
}

export default Home;