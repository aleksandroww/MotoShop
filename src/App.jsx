// React
import React, { createContext, useState, useEffect } from 'react';

// Firebase
import firebase from 'firebase';
import 'firebase/config';

// Router and Routes
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from 'constants/routes';

// Routes
import { routes } from 'constants/routes';

// Firebase
import 'firebase/config';

// Screens
import Home from 'screens/Home';
import Login from 'screens/Login';
import NotFound from 'screens/NotFound';
import Loading from 'screens/Loading';
import Register from 'screens/Register';
import Create from 'screens/Create';
import AllPosts from 'screens/AllPosts';
import MyPosts from 'screens/MyPosts';

// Components
import Header from 'shared/components/Header';
import Message from 'shared/components/Message';

// Context
export const UserContext = createContext();

// Context
const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

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
    <UserContext.Provider value={{ user, setMessage }}>
      <Router>
        <Header />
        {message && <Message message={message} />}
        {loading ? (
          <Loading />
        ) : (
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.login} component={Login} />
            <Route path={routes.register} component={Register} />
            <Route path={routes.create} component={Create} />
            <Route path={routes.allPosts} component={AllPosts} />
            <Route path={routes.myPosts} component={MyPosts} />
            <Route path="*" component={NotFound} />
          </Switch>
        )}
      </Router>
    </UserContext.Provider>
  );
}

export default App;
