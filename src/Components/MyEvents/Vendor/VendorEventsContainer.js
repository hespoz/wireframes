import React, { Component } from 'react';

import { getVendorEvents } from "../../../actions/vendorEventsAction.js";

import {
    withRouter
} from 'react-router-dom';

import { Button, List, Divider } from 'semantic-ui-react'

import VendorEvents from './VendorEvents.js'

import {connect} from "react-redux";

@connect((store) => {
    return {
        events:store.vendorEvents.events
    }
})
class VendorEventsContainer extends Component {

    componentWillMount = () => {
        this.props.dispatch(getVendorEvents())
    }

    render () {
        return (
            <VendorEvents events={this.props.events}/>
        )
    }
}

export default VendorEventsContainer