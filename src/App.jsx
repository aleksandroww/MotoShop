// React
import React from 'react';

// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Screens
import Home from 'screens/Home';
import Login from 'screens/Login';
import Products from 'screens/Products';
import Logout from 'screens/Logout';
import NotFound from 'screens/NotFound';
import Contacts from 'screens/Contacts';

// Components
import Header from 'shared/components/Header';
import Register from 'screens/Register';
import Create from 'screens/Create';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />\
        <Route path='/products' component={Products} />
        <Route path='/create' component={Create} />
        <Route path='/logout' component={Logout} />
        <Route path='/contacts' component={Contacts} />
        <Route exact path='/' component={Home} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
