import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Registeration from './components/registeration/Registeration';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Registeration} />
        <Route path="/login" component={Login} />
        </Switch>
    </div>
  );
}

export default App;
