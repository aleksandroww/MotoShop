import React from 'react';
import styles from './index.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header-content']}>
        <a href='/'>MotoShop</a>

        <nav className={styles.nav}>
          <ul className={styles['nav-items']}>
            <li>
              <a href='/login'>Login</a>
            </li>
            <li>
              <a href='/register'>Register</a>
            </li>
            <li>
              <a href='/create'>Sell bike</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
