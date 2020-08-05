// React
import React from 'react';

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import Home from "screens/Home";
import Login from 'screens/Login';
import NotFound from 'screens/NotFound';

// Components
import Header from 'shared/components/Header';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/login" component={Login}/>
                <Route exact path="/" component={Home}/>
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

export default App;