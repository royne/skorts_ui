import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EscortsAccount from './Components/auth/EscortsAccount';
import Home from './Components/home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup-escort" component={EscortsAccount} />
      </Switch>
    </Router>
  );
}

export default App;
