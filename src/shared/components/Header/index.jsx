import React from 'react';
import styles from './index.module.css';

function Header() {
    return (
       <header className={styles.header}>
           <h1 className={styles.logo}>Moto Sale</h1>

           <nav className={styles.nav}>
               <ul className={styles['nav-items']}>
                   <li><a href="/">Home</a></li>
                   <li><a href="/products">Products</a></li>
                   <li><a href="/login">Login</a></li>
                   <li><a href="/register">Register</a></li>
               </ul>
           </nav>
       </header>
    )

}

export default Header;