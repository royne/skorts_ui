import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EscortsAccount from './Components/auth/EscortsAccount';
import Home from './Components/home/Home';
import Profile from './Components/profile/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup-escort" component={EscortsAccount} />
        <Route exact path="/perfil" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
