// React and style
import React from 'react';
import styles from './index.module.css';

// Router
import { Link } from 'react-router-dom';

// Routes
import { routes } from 'constants/routes';

// Services
import { user } from 'services';

function Header() {
  const handleLogout = async () => {
    await user.logout();
    window.location = routes.home;
  };

  return (
    <header className={styles.header}>
      <div className={styles['header-content']}>
        <Link to={routes.home}>MotoShop</Link>

        <nav className={styles.nav}>
          <ul className={styles['nav-items']}>
            <li>
              <Link to={routes.login}>Login</Link>
            </li>
            <li>
              <Link to={routes.register}>Register</Link>
            </li>
            <li>
              <Link to={routes.create}>Sell My Bike</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
