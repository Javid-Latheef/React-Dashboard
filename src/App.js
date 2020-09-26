import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import store from './js/store/store'
import './App.css';
import DashboardContainer from './containers/dashboardContainer/dashboard'


function App() {
  return (
    <Provider store={store}>
      <Router>
      <Switch>
          <Route path="/about">  
          </Route>
          <Route path="/users">
            
          </Route>
          <Route path="/dashboard">
            <DashboardContainer />
          </Route>

          <Route exact path="/" render={() => (<Redirect to="/dashboard" />)} /> 

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
