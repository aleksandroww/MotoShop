// React and style
import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

//import Firebase
import firebase from 'firebase';
import 'firebase/config';

//import Context
import { UserContext } from 'App';

//import Loading
import Loading from 'screens/Loading';

// Router
import { Link } from 'react-router-dom';

// Routes
import { routes } from 'constants/routes';

// Services
import { userService } from 'services';

function Header() {
  const handlerLogout = async () => {
    await userService.logout();
    window.location = routes.home;
  };

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user && !user.emailVerified) {
        await user.sendEmailVerification();
        setLoading(false);
      } else if (user && user.emailVerified) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    setLoading(false);
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      <header className={styles.header}>
        <div className={styles['header-content']}>
          <Link to={routes.home}>MotoShop</Link>
          {loading ? (
            <Loading />
          ) : (
            <nav className={styles.nav}>
              <ul className={styles['nav-items']}>
                <li>{!user && <Link to={routes.login}>Login</Link>}</li>
                <li>{!user && <Link to={routes.register}>Register</Link>}</li>
                <li>
                  <Link to={routes.create}>Sell My Bike</Link>
                </li>
                <li>
                  <Link to={routes.allPosts}>Posts</Link>
                </li>
                <li>{user && <Link to={routes.myPosts}>My Posts</Link>}</li>
                <li>
                  {user && <button onClick={handlerLogout}>Logout</button>}
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>
    </UserContext.Provider>
  );
}

export default Header;
