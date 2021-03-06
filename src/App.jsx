// React
import React, { createContext, useState, useEffect } from 'react';

// Firebase
import firebase from 'firebase';
import 'firebase/config';

// Router and Routes
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from 'shared/constants/routes';

// Screens
import Home from 'screens/Home';
import Login from 'screens/Login';
import NotFound from 'screens/NotFound';
import Register from 'screens/Register';
import Create from 'screens/Create';
import Bikes from 'screens/Bikes';
import Search from 'screens/Search';
import Bike from 'screens/Bike';

// Components
import Header from 'shared/components/Header';
import Loading from 'shared/components/Loading';

// Context
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.login} component={Login} />
            <Route path={routes.register} component={Register} />
            <Route path={routes.create} component={Create} />
            <Route path={routes.bikes} component={Bikes} />
            <Route path={routes.search} component={Search} />
            <Route path={routes.bike} component={Bike} />
            <Route path='*' component={NotFound} />
          </Switch>
        )}
      </Router>
    </UserContext.Provider>
  );
}

export default App;
