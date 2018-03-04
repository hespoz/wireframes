import React, { Component } from 'react';

import HeaderMenu from '../common/HeaderMenu.js'

import {
    Route,
    withRouter,
    Switch
} from 'react-router-dom';

import { Divider } from 'semantic-ui-react'

import MyEvents from '../MyEvents/MyEvents.js'
import NewEvent from '../NewEvent/NewEvent.js'
import Settings from '../Settings/Settings.js'

const Dashboard = withRouter((props) => {
    return (
      <div className={"container"}>
      <HeaderMenu/>
      <Divider clearing />
      <Switch>
        <Route exact path='/board' component={MyEvents}/>
        <Route path='/board/settings' component={Settings}/>
        <Route exact path={'/board/event/new'} component={NewEvent}/>
      </Switch>      
      </div>
  
    )
  
})

export default Dashboard