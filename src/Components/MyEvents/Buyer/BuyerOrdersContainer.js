import React, { Component } from 'react';

import {
    withRouter
} from 'react-router-dom';

import { Header, List} from 'semantic-ui-react'

import BuyerOrders from './BuyerOrders.js'

import { getBuyerEvents } from "../../../actions/buyerEventsAction.js";

import {connect} from "react-redux";

@connect((store) => {
    return {
        events:store.buyerEvents.events
    }
})
class BuyerOrdersContainer extends Component {

    componentWillMount = () => {
        this.props.dispatch(getBuyerEvents())
    }

    render() {
        return (<BuyerOrders events={this.props.events}/>)
    }

}    
  


export default withRouter(BuyerOrdersContainer)