import React, { Component } from 'react';

import {
    withRouter
} from 'react-router-dom';

import VendorEvents from './VendorEvents.js'
import BuyerOrders from './BuyerOrders.js'


const MyEvents = withRouter((props) => {
  
    const { history } = props
    let userType = "VENDOR"
    if (userType === "VENDOR") {
        return <VendorEvents/>
    } else {
        return <BuyerOrders/>
    }

})

export default MyEvents