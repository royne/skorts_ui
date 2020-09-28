import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EscortsAccount from './Components/auth/EscortsAccount';
import Home from './Components/home/Home';
import Profile from './Components/profile/Profile';
import EditData from './Components/profile/EditData'
import EditPhotos from './Components/profile/EditPhotos';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup-escort" component={EscortsAccount} />
        <Route exact path="/perfil" component={Profile} />
        <Route exact path="/editar-perfil" component={EditData} />
        <Route exact path="/editar-fotos" component={EditPhotos} />
      </Switch>
    </Router>
  );
}

export default App;
