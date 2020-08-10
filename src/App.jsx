// React
import React, { createContext, useState, useEffect } from 'react';

// Firebase
import firebase from 'firebase';

// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Routes
import { routes } from 'constants/routes';

// Firebase
import 'firebase/config';

// Screens
import Home from 'screens/Home';
import Login from 'screens/Login';
import NotFound from 'screens/NotFound';
import Loading from 'screens/Loading';

// Components
import Header from 'shared/components/Header';
import Register from 'screens/Register';
import Create from 'screens/Create';

// Context
const UserContext = createContext();

function App() {
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
      <Router>
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <Switch>
            {!user && <Route path={routes.login} component={Login} />}
            {!user && <Route path={routes.register} component={Register} />}
            <Route path={routes.create} component={Create} />
            <Route exact path={routes.home} component={Home} />
            <Route path='*' component={NotFound} />
          </Switch>
        )}
      </Router>
    </UserContext.Provider>
  );
}

export default App;
