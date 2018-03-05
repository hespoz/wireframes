import React, { Component } from 'react';

import {
    withRouter
} from 'react-router-dom';

import VendorEventsContainer from './Vendor/VendorEventsContainer.js'
import BuyerOrdersContainer from './Buyer/BuyerOrdersContainer.js'


const MyEvents = withRouter((props) => {
  
    const { history } = props
    let userType = "VENDOR"
    if (userType === "VENDOR1") {
        return <VendorEventsContainer/>
    } else {
        return <BuyerOrdersContainer/>
    }

})

export default MyEvents