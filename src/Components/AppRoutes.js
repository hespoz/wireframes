import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch
} from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage.js'
import HeaderMenu from './common/HeaderMenu.js'
import Dashboard from './Dashboard/Dashboard.js'
import EventCampaign from './EventCampaign/EventCampaign.js'
import Login from './Login/Login.js'

const Register = () => (
    <div>
      <h2>Login</h2>
    </div>
  )

const AppRoutes = () => (
  <Router>
  <div>
    <Route exact path='/' component={LandingPage}/>
    <Route exact path='/event/:eventId' component={EventCampaign}/>
    <Route path='/board' component={Dashboard}/>
    <Route path='/login' component={Login}/>
  </div>
  </Router>
)

export default AppRoutes;
