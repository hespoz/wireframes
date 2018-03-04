import React, { Component } from 'react';

import {
    withRouter
} from 'react-router-dom';

import { Divider } from 'semantic-ui-react'

import HeaderMenu from '../common/HeaderMenu.js'

const LandingPage = withRouter((props) => {
  
    const { history } = props
  
    return (
      <div className={"container"}>
        <HeaderMenu/>
        <Divider clearing />   
  
        <h1>Landing page</h1>
  
      </div>
    )
  
})

export default LandingPage